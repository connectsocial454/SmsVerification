const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uuid = require('uuidv4');

// Create Schema
const ClientSchema = new Schema({
  companyId: {
    type: String
  },
  companyName:{
    type: String
  },
  username: {
    type: String
  },
  password: {
    type: String
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  }
});

module.exports = Client = mongoose.model('clients', ClientSchema);
