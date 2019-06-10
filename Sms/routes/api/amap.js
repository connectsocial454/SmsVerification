const express = require('express');
const router = express.Router();

// Load User model
const UserProfile = require('../../models/UserProfile');

router.post('/', (req, res) => {
    var levels = req.body.level;
    UserProfile.find({level : levels, location: "true", region: req.body.region}).then(data =>{
    if(data){
      res.json(data);
    }
    else{
      res.json("No user found");
      }
  })
})

module.exports = router;