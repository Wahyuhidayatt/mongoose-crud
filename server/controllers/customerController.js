const express = require('express');
const Customer = require('../models/customer');

let methods = {}

  methods.create = function ( req, res) {
    var customer = {
      name : req.body.name,
      memberid : req.body.memberid,
      address : req.body.address,
      zipcode : req.body.zipcode,
      phone : req.body.phone
    }
    Customer.create(customer)
    .then( function (err, data) {
      if (err) {
        res.json (err)
      }else {
        res.json ("create successfully")
      }
    })
  }
  methods.findAll = function (req, res) {
    Customer.find({}, function (err, result) {
      if (err) {
        res.json(err)
      }else{
        res.json({
          CustomerData : result
        })
      }
    })
    // .then( function (err, data) {
    //   if ( err ) {
    //     res.json(err)
    //   }else{
    //     res.json ({
    //       Bookdata : data
    //     })
    //   }
    // })
  }
  methods.findOne = function (req, res) {
    Customer.find ({
      _id : req.params.id
    })
    .then(function (err, data) {
      if(err) {
        res.json (err)
      }else {
        res.json(data)
      }
    })
  }
  methods.update = function (req, res) {
    Customer.findByIdAndUpdate({'_id' : req.params.id}, { $set: req.body }, { new: true }, function (err, data) {
      if (err) {
        res.json (err)
      }else{
        res.json(data)
      }
    });
  }
  methods.delete = function (req, res) {
    Customer.remove({'_id' : req.params.id}, function (err) {
      if (err) {
        res.json(err)
      }else {
        res.json ("DELETE successfully")
      }
    });
  }
module.exports = methods
