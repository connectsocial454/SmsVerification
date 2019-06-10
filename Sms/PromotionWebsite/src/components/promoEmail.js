import React, { Component } from 'react';
import Axios from 'axios';

class PromoEmail extends Component {

    componentDidMount(){
        const email = this.props.match.params.email;
        Axios.get(`/api/user/promoEmail?toEmail=${email}&fromEmail=`);
    }
  
  render() {
    return (
        <div className = "landing">
        <div className="landingContainer">
            <img className="promoImg" src="https://www.bandt.com.au/information/uploads/2016/07/Quarterpoundmyangus-1260x840.jpg" />
            <p className= "EmailText">An Email has been sent to you with the download link to your promo ticket!</p>
        </div>
  </div>
    )
  }
}

export default PromoEmail;