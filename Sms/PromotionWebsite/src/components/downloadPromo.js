import React, { Component } from 'react';
import Axios from 'axios';

class DownloadPromo extends Component {
  
  render() {
    return (
        <div className = "landing">
        <div className="landingContainer">
            <img className="downloadPromoImg" src="https://www.bandt.com.au/information/uploads/2016/07/Quarterpoundmyangus-1260x840.jpg" />
            <div className="clear"></div>
            <p className= "EmailText">Please Download this ticket.</p>
        </div>
  </div>
    )
  }
}

export default DownloadPromo;