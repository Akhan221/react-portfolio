import React, { Component } from 'react';
import pctank from '../pc_tank.jpg';

class About extends Component {
  render() {

    if(this.props.data){
      var fullname = this.props.data.fullname;
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div class="twelve columns"> <img className="profile-pic"  src={profilepic} alt="Ahmad Khan Profile Pic" /></div>
      </div>
      <div className = "row">

         
         <div className="eight columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{fullname}</span><br />
						   <span>{street}
						         {city}, {state} {zip}
                   </span>
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} target="_blank" className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
         <div className="four columns">
         <img className="pc-tank"  src={pctank} alt="PC Tank" />
         <figcaption>A computer I built within a fish tank - with live fish inside!</figcaption>

         </div>
         
      </div>

   </section>
    );
  }
}

export default About;
