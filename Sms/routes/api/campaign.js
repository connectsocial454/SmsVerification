const express = require('express');
const router = express.Router();
// Load User model
const Campaign = require('../../models/Campaign');

router.post('/newCampaign', (req, res) => {

    const campaignId = req.query.campaignId;
    const companyId = req.query.companyId;
    const companyName = req.query.companyName;
    const name = req.query.name;
    const email = req.query.email;
    const sms = req.query.sms;
    const fromName = req.query.fromName;
    const fromEmail = req.query.fromEmail;
    const toEmail = req.query.toEmail;
    const emailSubject = req.query.emailSubject;
    const emailContent = req.query.emailContent;
    const ageFrom = req.query.ageFrom;
    const ageTo = req.query.ageTo;
    const gender = req.query.gender;
    const promotionId = req.query.promotionId;
    const zipCode = req.query.zipCode;
    const zipCodeRadius = req.query.zipCodeRadius;
    const sendDateTime = req.query.sendDateTime;

    console.log(companyName);

    console.log(req.query);
    Campaign.findOne({ campaignId })
    .then(data => {
        if(data) {
            var newvalues = { $set: { name, email, sms, fromName, fromEmail, toEmail, emailSubject, emailContent, ageFrom, ageTo, gender, promotionId, zipCode, zipCodeRadius, sendDateTime } };
            var options = { multi: true};
        
            Campaign.update({campaignId}, newvalues, options, function(error) {
                if (error) {
                  console.log(error);
                }
                console.log("Campaign updated");})
                res.json({ msg: 'Updated' });
        }
        else {
            const newUser = new Campaign({ campaignId, companyId, name, email, sms, fromName, fromEmail, toEmail, emailSubject, emailContent, ageFrom, ageTo, gender, promotionId, zipCode, zipCodeRadius, sendDateTime });
            newUser.save()
            .then( data => {
                res.json("Campaign Created");
        })
        }        
    })
})

router.post('/saveCampaign', (req, res) => {

    const campaignId = req.query.campaignId;
    const companyId = req.query.companyId;
    const companyName = req.query.companyName;
    const name = req.query.name;
    const email = req.query.email;
    const sms = req.query.sms;
    const fromName = req.query.fromName;
    const fromEmail = req.query.fromEmail;
    const toEmail = req.query.toEmail;
    const emailSubject = req.query.emailSubject;
    const emailContent = req.query.emailContent;
    const ageFrom = req.query.ageFrom;
    const ageTo = req.query.ageTo;
    const gender = req.query.gender;
    const promotionId = req.query.promotionId;
    const zipCode = req.query.zipCode;
    const zipCodeRadius = req.query.zipCodeRadius;
    const sendDateTime = req.query.sendDateTime;

    console.log(companyName);

    console.log(req.query);
    Campaign.findOne({ campaignId })
    .then(data => {
        if(data) {
            var newvalues = { $set: { name, email, sms, fromName, fromEmail, toEmail, emailSubject, emailContent, ageFrom, ageTo, gender, promotionId, zipCode, zipCodeRadius, sendDateTime } };
            var options = { multi: true};
        
            Campaign.update({campaignId}, newvalues, options, function(error) {
                if (error) {
                  console.log(error);
                }
                console.log("Campaign updated");})
                res.json({ msg: 'Updated' });
        }
        else {
            const newUser = new Campaign({ campaignId, companyId, name, email, sms, fromName, fromEmail, toEmail, emailSubject, emailContent, ageFrom, ageTo, gender, promotionId, zipCode, zipCodeRadius, sendDateTime });
            newUser.save()
            .then( data => {
                res.json("Campaign Created");
        })
        }        
    })
})

router.get('/getCampaign', (req, res) => {
    const companyId = req.query.companyId;
    Campaign.findOne({ campaignId })
    .then(data =>{
        if(data){
            res.json(data);
        }
        else{
            res.json({status: "No campaigns found"}); 
        }
    })
})


module.exports = router;