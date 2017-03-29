'use strict'

const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

let schemaTransaction = Schema({
  'memberid' : String,
  'days' : String,
  'out_date' : new Date(),
  'due_date' : new Date(),
  'in_date' : new Date(),
  'fine' : Number,
  'booklist' : [{ type: Schema.Types.ObjectId, ref: 'Book' }]
})

let Transaction = Mongoose.model('Transaction', schemaTransaction)

module.exports = Transaction
