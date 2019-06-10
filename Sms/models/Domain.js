const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uuid = require('uuidv4');

// Create Schema
const DomainSchema = new Schema({
  companyId: {
    type: String
  },
  domainId: {
    type: String,
    default: uuid()
  },
  domain: {
    type: String
  }
});

module.exports = Domain = mongoose.model('domains', DomainSchema);
