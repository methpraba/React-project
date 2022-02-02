import React from "react";
import image from './images/about.jpg';
import image1 from './images/cus.JPG';
import image2 from './images/secu.JPG';
import image3 from './images/price.JPG';

function About() {
  return (
    
    <div className="about">
    
    <div  style={{ backgroundImage:`url(${image})`}}> 
    <h1 class="font-weight-light" align="center"><b>About-Us</b></h1>
      <div class="container" float="left">
        <div class="row align-items-left my-5">    
            <p><b>
            Pick & Go is a package delivery service provider establish in Sri Lanka where they
            provide goods delivery all over the country.
            We have several operational service centers at all districts and number of staff employed vary according to the general capacity of business operations. 
            Pick & GO wishes to introduce an Online pick requesting and delivering system for the requirement of goods delivery. 
            In the online system, the nearest operational center will be selected based on the customer location. 
            <br/>All the request is to be given a scheduled pickup time within one-hour duration from the pickup. 
            </b></p>
    </div>
    </div>    
        </div>
        <div>
        <h1 class="font-weight-light" align="center"><b>WHY TO BUY FROM US</b></h1>
        <img src={image1} height={250} width={250} align="left"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={image2} height={250} width={250} align="center"/><img src={image3} height={250} width={250} align="right" />
        <p><b> &nbsp;&nbsp;&nbsp;Customer Friendly&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Secure service &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Best Price</b></p> 
        
         </div>
        </div>   
  );
}

export default About;