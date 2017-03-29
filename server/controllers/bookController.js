const express = require('express');
const Book = require('../models/book');

let methodBooks = {}

  methodBooks.create = function ( req, res) {
    var book = {
      isbn : req.body.isbn,
      title : req.body.title,
      author : req.body.author,
      category : req.body.category,
      stock : req.body.stock
    }
    Book.create(book)
    .then( function (err, data) {
      if (err) {
        res.json (err)
      }else {
        res.json ("create successfully")
      }
    })
  }
  methodBooks.findAll = function (req, res) {
    Book.find({}, function (err, result) {
      if (err) {
        res.json(err)
      }else{
        res.json({
          Bookdata : result
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
  methodBooks.findOne = function (req, res) {
    Book.find ({
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
  methodBooks.update = function (req, res) {
    Book.findByIdAndUpdate({'_id' : req.params.id}, { $set: req.body }, { new: true }, function (err, data) {
      if (err) {
        res.json (err)
      }else{
        res.json(data)
      }
    });
  }
  methodBooks.delete = function (req, res) {
    Book.remove({'_id' : req.params.id}, function (err) {
      if (err) {
        res.json(err)
      }else {
        res.json ("DELETE successfully")
      }
    });
  }
module.exports = methodBooks
