const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uuid = require('uuidv4');

// Create Schema
const SponsoredPromotionSchema = new Schema({
  companyId: {
    type: String
  },
  promotionId: {
    type: String,
    default: uuid()
  },
  promotion: {
    type: String
  },
  sponsoredCompanyId: {
    type: String
  }
});

module.exports = SponsoredPromotion = mongoose.model('sponsoredPromotion', SponsoredPromotionSchema);
