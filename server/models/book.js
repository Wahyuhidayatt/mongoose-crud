'use strict'

const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

let schemaBooks = new Schema({
  'isbn' : String,
  'title' : String,
  'author' : String,
  'category' : String,
  'stock' : Number
})

let Book = Mongoose.model('Book', schemaBooks)

module.exports = Book
