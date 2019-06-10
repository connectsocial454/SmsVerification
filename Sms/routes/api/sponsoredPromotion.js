const express = require('express');
const router = express.Router();
const uuid = require('uuidv4');
// Load User model
const SponsoredPromotion = require('../../models/SponsoredPromotion');

router.post('/', (req, res) => {

    const companyId = req.query.companyId;
    const promotion = req.query.promotion;
    const sponsoredCompanyId = req.query.sponsoredCompanyId;

    console.log(req.query);

    const newUser = new SponsoredPromotion({ promotion, companyId, sponsoredCompanyId });
            newUser.save()
            .then( data => {
                res.json({status: "Promotion Added" });
        })
})

router.get('/getSponsoredPromotion', (req, res) => {
    const companyId = req.query.companyId;
    // const domainId = req.query.domainId;
    SponsoredPromotion.findOne({ companyId })
    .then(data => {
        if(data){
            res.json(data)
        }
        else{
            res.json({status: "No Sponosred Promotions added yet"})
        }
    })
});

module.exports = router;