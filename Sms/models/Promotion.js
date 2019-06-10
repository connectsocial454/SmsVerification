const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uuid = require('uuidv4');

// Create Schema
const PromotionSchema = new Schema({
  companyId: {
    type: String
  },
  companyName: {
    type: String
  },
  promotionId: {
    type: String,
    default: uuid()
  },
  title:{
    type: String
  },
  description: {
    type: String
  },
  imageurl: {
    type: String
  },
  url: {
    type: String
  }
});

module.exports = Promotion = mongoose.model('promotions', PromotionSchema);