const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const listsRoutes = express.Router();

let Lists = require('./lists-model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/lists', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

listsRoutes.route('/').get(function(req, res) {
    Lists.find(function(err, lists) {
        if (err) {
            console.log(err);
        } else {
            res.json(lists);
        }
    });
})

listsRoutes.route('/add').post(function(req, res) {
    let lists = new Lists(req.body);
    lists.save()
        .then(lists => {
            res.status(200).json({'lists': 'person added successfully!'});
        })
        .catch(err => {
            res.status(400).send('adding failed');
        })
})

listsRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Lists.findById(id, function(err, lists) {
        res.json(lists);
    });
});

listsRoutes.route('/update/:id').post(function(req, res) {
    Lists.findById(req.params.id, function(err, lists) {
        if(!lists)
            res.status(404).send('data not found');
        else {
            lists.lists_name = req.body.lists_name;
            lists.lists_phone = req.body.lists_phone;

            lists.save().then(lists => {
                res.json('Lists updated');
            })
            .catch(err => {
                res.status(400).send('Update failed');
            })
        }
    })
})

listsRoutes.route('/delete/:id').delete(function(req, res) {
    let id = req.params.id;

    Lists.findByIdAndRemove(id, (err, tasks) => {
        if (err) return res.status(500).send(err);
        const response = {
            message: "Person sucessfully deleted.",
            person_id: id
        };
        return res.status(200).send(response);
    })
})

app.use('/lists', listsRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

