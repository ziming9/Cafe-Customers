const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

let Person = require('../models/lists-model');

// router.route('/').get(function(req, res) {
//     Lists.find(function(err, lists) {
//         if (err) {
//             console.log(err);
//         } else {
//             res.json(lists);
//         }
//     });
// })

router.get('/', (req, res) => {
    Person.find((err, lists) => {
        if (err) {
            console.log(err);
        } else {
            res.json(lists);
        }
    })
})

router.post('/add', (req, res) => {
    let lists = new Person(req.body);
    lists.save()
        .then(lists => {
            res.status(200).json({'lists': 'person added successfully!'});
        })
        .catch(err => {
            res.status(400).send('adding failed');
        })
})

router.get('/:id', (req, res) => {
    let id = req.params.id;
    Person.findById(id, function(err, lists) {
        res.json(lists);
    });
});

router.post('/update/:id', (req, res) => {
    Person.findById(req.params.id, function(err, lists) {
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

router.delete('/delete/:id', (req, res) => {
    let id = req.params.id;

    Person.findByIdAndRemove(id, (err, tasks) => {
        if (err) return res.status(500).send(err);
        const response = {
            message: "Person sucessfully deleted.",
            person_id: id
        };
        return res.status(200).send(response);
    })
})

module.exports = router;