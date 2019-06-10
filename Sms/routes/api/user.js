const express = require('express');
const router = express.Router();
// Load User model
const User = require('../../models/Users');
var securePin = require("secure-pin");
require('dotenv').config();
var nodemailer = require('nodemailer');

const client = require('twilio')(
    process.env.TWILIO_ACCOUT_SID,
    process.env.TWILIO_AUTH_TOKEN
  );

router.post('/', (req, res) => {

    const phoneNo = req.query.phoneNo;
    const companyId = req.query.companyId;
    const promotionId = req.query.promotionId;
    const name = req.query.name;
    const email = req.query.email;
    const companyName = req.query.companyName;
    const promoCode = securePin.generatePinSync(4);

    console.log(companyName)

    console.log(req.query);
    User.findOne({phoneNo, companyId })
    .then(data => {
        if(data) {
            res.json("Sorry you already have the promo");
        }
        else {
            const newUser = new User({name, email, phoneNo, companyId, companyName, promoCode, promotionId});
            newUser.save()
            .then( data => {
                res.json("User Created");
                // res.header('Content-Type', 'application/json');
                client.messages
                    .create({
                    from: process.env.TWILIO_PHONE_NUMBER,
                    to: 0017027106263,
                    body: `Your Twilio short code is ${promoCode}`
                    })
                    .then(() => {
                    res.send(JSON.stringify({ success: true }));
                    })
                    .catch(err => {
                    console.log(err);
                    res.send(JSON.stringify({ success: false }));
                    });
        })
        }        
    })
})

router.get('/confirmPromo', (req, res) => {
    const phoneNo = req.query.phoneNo;
    const companyId = req.query.companyId;
    const promotionId = req.query.promotionId;
    const promoCode = req.query.promoCode;

    console.log(req.query)

    User.findOne({phoneNo, companyId, promoCode, promotionId})
    .then(data =>{
        if(data){
            res.json({success: true, status: 200})
        }
        else{
            res.json({success: false, status: 404})
        }
    })
});

router.get('/promoEmail', (req, res) => {
    const fromEmail = "tbk454@gmail.com";
    const toEmail = req.query.toEmail;

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'tbk454@gmail.com',
                pass: 'ratsandcats'
            }
        });

       const mailOptions = {
        from: fromEmail, // sender address
        to: toEmail, // list of receivers
        subject: 'This is a test Email from nodemailer', // Subject line
        html: '<p>Follow the link to download your promo: <a href="http://localhost:3000/getPromo">Click Here!</a></p>' // plain text body
      };

      transporter.sendMail(mailOptions, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
     });
})

module.exports = router;