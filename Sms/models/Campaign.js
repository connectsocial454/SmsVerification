const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const CampaignSchema = new Schema({
  companyId: {
    type: String
  },
  companyName: {
    type: String
  },
  campaignId: {
    type: String
  },
  name:{
    type: String
  },
  email: {
    type: String
  },
  sms: {
    type: String
  },
  fromEmail: {
    type: String
  },
  toEmail: {
    type: String
  },
  fromName: {
    type: String
  },
  emailSubject: {
    type: String
  },
  emailContent: {
    type: String
  },
  ageFrom: {
    type: Number
  },
  ageTo:{
      type: Number
  },
  gender: {
    type: String
  },
  promotionId: {
    type: String
  },
  zipCode: {
    type: String
  },
  zipCodeRadius: {
    type: String
  },
  sendDateTime: {
      type: Date
  }
});

module.exports = Campaign = mongoose.model('campaigns', CampaignSchema);