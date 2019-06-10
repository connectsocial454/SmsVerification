const express = require('express');
const router = express.Router();
const uuid = require('uuidv4');
// Load User model
const Domain = require('../../models/Domain');

router.get('/database', (req, res) => {

    const companyId = req.query.companyId;
    const ageFrom = req.query.ageFrom;
    const ageTo = req.query.ageTo;
    const gender = req.query.gender;
    const promotionId = req.query.promotionId;
    const zipCode = req.query.zipCode;
    const zipCodeRadius = req.query.zipCodeRadius;

    console.log(req.query);
    Domain.findOne({ companyId, gender, promotionId, zipCode, zipCodeRadius,  $and:[ {age : {$gte: ageFrom}},{age : {$lte: ageTo}}] })
    .then(data => {
        if(data) {
            res.json(data);
        }
        else {
            res.json({Status: "No results"})
        }        
    })
})

router.get('/map', (req, res) => {

    const companyId = req.query.companyId;
    const ageFrom = req.query.ageFrom;
    const ageTo = req.query.ageTo;
    const gender = req.query.gender;

    console.log(req.query);
    Domain.findOne({ companyId, gender, $and:[ {age : {$gte: ageFrom}},{age : {$lte: ageTo}}] })
    .then(data => {
        if(data) {
            res.json(data);
        }
        else {
            res.json({Status: "No results"})
        }        
    })
})

module.exports = router;