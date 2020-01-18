const express = require('express');
const router = express.Router();

const validatePersonInput = require('../Validation/CreatePerson');
const Person = require('../models/lists-model');

router.get('/', (req, res) => { 
    Person.find((err, data) => {
        if (err) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

router.post('/add', (req, res) => {
    const { errors, isValid } = validatePersonInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const newPerson = new Person({
        lists_phone: req.body.lists_phone,
        lists_name: req.body.lists_name,
        lists_address: req.body.lists_address,
        lists_blacklist: req.body.lists_blacklist
    })

    newPerson.save().then(person => res.json(person));
    // Person.create(req.body, (err, data) => {
    //     if (err) {
    //         return next(err)
    //     } else {
    //         console.log(data);
    //         res.json(data);
    //     }
    // })
})

router.get('/:id', (req, res) => {
    let id = req.params.id;

    Person.findById(id, function(err, lists) {
        res.json(lists);
    });
});

router.post('/update/:id', (req, res) => {
    Person.findById(req.params.id, (err, lists) => {
        if(!lists)
            res.status(404).send('data not found');
        else {
            lists.lists_name = req.body.lists_name;
            lists.lists_phone = req.body.lists_phone;
            lists.lists_address = req.body.lists_address;
            lists.lists_blacklist = req.body.lists_blacklist;

            lists.save().then(lists => {
                res.json('Lists updated');
            })
            .catch(err => {
                res.status(400).send(err);
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