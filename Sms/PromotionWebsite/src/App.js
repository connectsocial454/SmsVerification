import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import { Provider } from 'react-redux';
// import store from './store';


import "./App.css";

import Landing from "./components/landing";
import confirmPromo from "./components/confirmPromo";
import PromoEmail from "./components/promoEmail";
import DownloadPromo from "./components/downloadPromo";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <Navbar /> */}
          <Route exact path="/:companyName/:companyId/:promotionId" component={Landing} />
          <Route exact path="/confirmPromo/:companyId/:promotionId/:email/:phoneNo" component={confirmPromo} />
          <Route exact path="/promo/email/:email" component={PromoEmail} />
          <Route exact path="/getPromo" component={DownloadPromo} />
          <div className="container">
            {/* <Route exact path="/home" component={home} />
            <Route exact path="/amap" component={AMap} />
            <Route exact path="/featured" component={Feature} />
            <Route exact path="/trackupload" component={TrackUpload} />
            <Route exact path="/payment" component={Payment} />
            <Route exact path="/booking" component={booking} />
            <Route exact path="/bookagig/:id/:username" component={BookGig} />
            <Route exact path="/editProfile" component={editProfile} />
            <Route exact path='/recommendations' component={Recommendations} />
            <Route path="/profile/:id" component={Profile} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} /> */}

          </div>
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;
