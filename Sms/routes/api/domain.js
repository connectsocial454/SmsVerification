const express = require('express');
const router = express.Router();
const uuid = require('uuidv4');
// Load User model
const Domain = require('../../models/Domain');

router.post('/', (req, res) => {

    const companyId = req.query.companyId;
    const domainId = req.query.domainId;
    const domain = req.query.domain;

    console.log(req.query);
    Domain.findOne({ companyId, domain })
    .then(data => {
        if(data) {
            var newvalues = { $set: { domain } };
            var options = { multi: false};
        
            Domain.update({domain}, newvalues, options, function(error) {
                if (error) {
                  console.log(error);
                }
                console.log("Domain updated");})
                res.json({ msg: 'Updated' });
        }
        else {
            const newUser = new Domain({ domain, companyId });
            newUser.save()
            .then( data => {
                res.json({status: 200 });
        })
        }        
    })
})

router.get('/getDomain', (req, res) => {
    const companyId = req.query.companyId;
    // const domainId = req.query.domainId;
    Domain.findOne({ companyId })
    .then(data => {
        if(data){
            res.json(data)
        }
        else{
            res.json({status: "No Domains added yet"})
        }
    })
});

module.exports = router;