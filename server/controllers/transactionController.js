const express = require('express');
const Transaction = require('../models/transaction');

let methods = {}

  methods.create = function ( req, res) {
    var transaction = {
      memberid : req.body.memberid,
      days : req.body.days,
      out_date : req.body.out_date,
      due_date : req.body.due_date,
      in_date : req.body.in_date,
      fine : req.body.fine
      booklist : []
    }
    Transaction.create(customer)
    .then( function (err, data) {
      if (err) {
        res.json (err)
      }else {
        res.json ("create successfully")
      }
    })
  }
  methods.findAll = function (req, res) {
    Transaction.find({}, function (err, result) {
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
    Transaction.find ({
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
    Transaction.findByIdAndUpdate({'_id' : req.params.id}, { $set: req.body }, { new: true }, function (err, data) {
      if (err) {
        res.json (err)
      }else{
        res.json(data)
      }
    });
  }
  methods.delete = function (req, res) {
    Transaction.remove({'_id' : req.params.id}, function (err) {
      if (err) {
        res.json(err)
      }else {
        res.json ("DELETE successfully")
      }
    });
  }
module.exports = methods
