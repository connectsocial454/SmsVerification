import React, { Component } from 'react';
import Axios from 'axios';

import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { withRouter } from 'react-router';

class Landing extends Component {
  constructor(props){
    super(props);
    this.state = {
      name : '',
      email: '',
      phoneNo: ''
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value })
  }

  onSubmit(e){
    e.preventDefault();
    const companyName = this.props.match.params.companyName;
    const companyId = this.props.match.params.companyId;
    Axios.post(`/api/user/?name=${this.state.name}&phoneNo=${this.state.phoneNo}&email=${this.state.email}&companyName=${companyName}&companyId=${companyId}`)
    .then(alert("Promo Code Sent!"));
    this.props.history.push(`/confirmPromo/${companyId}/${this.state.email}/${this.state.phoneNo}`);
  }
  componentDidMount(){
    const companyId = this.props.match.params.companyId;
    const promotionId = this.props.match.params.promotionId;
    Axios.get(`/api/promotion/getPromotion?companyId=${companyId}&promotionId=${promotionId}`)
    .then(data =>{
      this.setState({data: res.data})
    })
  }
  render() {
    console.log(this.props.match.params.companyId);
    return (
      <div className = "landing">
            <div className="landingContainer">
                <img className="promoImg" src={this.state.data.imageurl} />
                <form className="landingForm" onSubmit= {this.onSubmit}>
                    <input type="text" name="name" className= "formInput" placeholder="Name" value= {this.state.name} onChange= {this.onChange} />
                    <div className="clear"></div>

                    <input type="email" name="email" className= "formInput" placeholder="Email" value= {this.state.email} onChange= {this.onChange} />
                    <div className="clear"></div>
                    <PhoneInput
                    placeholder="Enter phone number"
                    value={ this.state.phoneNo }
                    onChange={ phoneNo => this.setState({ phoneNo }) } />
                    <div className="clear"></div>
                    <br />
                    <input type="submit" />
                </form>
            </div>
      </div>
    )
  }
}

export default Landing;