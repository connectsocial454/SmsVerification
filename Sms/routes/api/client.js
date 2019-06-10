const express = require('express');
const router = express.Router();
const uuid = require('uuidv4');
// Load User model
const Client = require('../../models/Client');

router.post('/', (req, res) => {

    const companyId = req.query.companyId;
    const companyName = req.query.companyName;
    const username = req.query.username;
    const password = req.query.password;
    const firstName = req.query.firstName;
    const lastName = req.query.lastName;
   

    console.log(companyName);

    console.log(req.query);
    Client.findOne({ companyId })
    .then(data => {
        if(data) {
            var newvalues = { $set: {  password } };
            var options = { multi: false};
        
            Client.update({companyId}, newvalues, options, function(error) {
                if (error) {
                  console.log(error);
                }
                console.log("Client updated");})
                res.json({ msg: 'Updated' });
        }
        else {
            const NewCompanyId = uuid();
            const newUser = new Client({ companyId: NewCompanyId, companyName, username, password, firstName, lastName });
            newUser.save()
            .then( data => {
                res.json({status: 200, companyId: NewCompanyId });
        })
        }        
    })
})

router.post('/updateAccount', (req, res) => {

    const companyId = req.query.companyId;
    const username = req.query.username;
    const firstName = req.query.firstName;
    const lastName = req.query.lastName;
   

    console.log(companyName);

    console.log(req.query);
    Client.findOne({ companyId })
    .then(data => {
        if(data) {
            var newvalues = { $set: { username, firstName, lastName } };
            var options = { multi: false};
        
            Client.update({companyId}, newvalues, options, function(error) {
                if (error) {
                  console.log(error);
                }
                console.log("Client updated");})
                res.json({ msg: 'Updated' });
        }
        else {
                res.json({status: "Error" });
        }        
    })
})

router.get('/login', (req, res) => {
    const username = req.query.username;
    const password = req.query.password;
    Client.findOne({ username, password })
    .then(data => {
        if(data){
            res.json({status: 200, companyId: data.companyId})
        }
        else{
            res.json({status: 404})
        }
    })
});

router.get('/getAccountDetails', (req, res) => {
    const companyId = req.query.companyId;
    Client.findOne({ companyId })
    .then(data => {
        if(data){
            res.json(data)
        }
        else{
            res.json({status: 404})
        }
    })
});
module.exports = router;