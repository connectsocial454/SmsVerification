const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors')

// const users = require('./routes/api/users');
const user = require('./routes/api/user');
const campaign = require('./routes/api/campaign');
const client = require('./routes/api/client');
const domain = require('./routes/api/domain');
const sponsoredPromotion = require('./routes/api/sponsoredPromotion');
const promotion = require('./routes/api/promotion');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Enable cors
app.use(cors({credentials: true, origin: true}));

var corsOptions = {
  origin: 'http://localhost:7000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Use Routes
// app.use('/api/users', users);
// app.use('/api/profile', profile);
app.use('/api/user', user);
app.use('/api/campaign', campaign);
app.use('/api/login', client);
app.use('/api/domain', domain);
app.use('/api/sponsoredPromotion', sponsoredPromotion);
app.use('/api/promotion', promotion);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
