const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  companyId: {
    type: String
  },
  companyName:{
    type: String
  },
  promotionId:{
    type: String
  },
  name: {
    type: String
  },
  email: {
    type: String
  },
  phoneNo: {
    type: String
  },
  gender: {
    type: String
  },
  city: {
    type: String
  },
  dob: {
    type: String
  },
  age: {
    type: Number
  },
  state: {
    type: String
  },
  zipcode: {
    type: String
  },
  promoCode:{
    type: String,
    default: 0
  }
});

module.exports = User = mongoose.model('users', UserSchema);
