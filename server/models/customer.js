'use strict'

const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

let schemaCustomer = Schema({
  'name' : String,
  'memberid' : String,
  'address' : String,
  'zipcode' : String,
  'phone' : String
})

let Customer = Mongoose.model('Customer', schemaCustomer)

module.exports = Customer
