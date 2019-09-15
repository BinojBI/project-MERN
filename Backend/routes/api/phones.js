const express = require('express');
const phoneRoutes = express.Router();

let Phone = require('./../../models/phone.model');

phoneRoutes.route('/').get(function(req, res) {
    Phone.find(function(err, phones) {
        if (err) {
            console.log(err);
        } else {         
            res.json(phones);
        }
    });
});

phoneRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Phone.findById(id, function(err, phone) {
        res.json(phone);
    });
});

phoneRoutes.route('/add').post(function(req, res) {
    let phone = new Phone(req.body);
    phone.save()
        .then(phone => {
            res.status(200).json({'phone': 'phone added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new phone failed');
        });
});

phoneRoutes.route('/update/:id').post(function(req, res) {
    Phone.findById(req.params.id, function(err, phone) {
        if (!phone)
            res.status(404).send("data is not found");
        else
            phone.phone_description = req.body.phone_description;
      

            phone.save().then(phone => {
                res.json('Phone updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

module.exports = phoneRoutes;