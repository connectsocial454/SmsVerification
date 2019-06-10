const express = require('express');
const router = express.Router();

const Promotion = require('../../models/Promotion');

router.post('/', (req, res) => {
  const companyId = req.query.companyId;
  const promotion = req.query.promotion;
  const sponsoredCompanyId = req.query.sponsoredCompanyId;

  console.log(req.query);

  const newUser = new Promotion({ promotionId, companyId, url, imageurl, title, description });
          newUser.save()
          .then( data => {
              res.json({status: "Promotion Added" });
      })
  });

  router.get('/getAllPromotions', (req, res) => {
    const companyId = req.query.companyId;
  
    Promotion.findOne({companyId})
    .then(data =>{
      if(data){
        res.json(data)
      }
      else{
        res.json("Error")
      }
    })
  })

router.get('/getPromotion', (req, res) => {
  const companyId = req.query.companyId;
  const promotionId = req.query.promotionId;

  Promotion.findOne({companyId, promotionId})
  .then(data =>{
    if(data){
      res.json(data)
    }
    else{
      res.json("Error")
    }
  })
})
   
module.exports = router;