import React from 'react';
import './assests/css/navbar.css';
// eslint-disable-next-line
import { Link,animateScroll as scroll } from "react-scroll";
import image from './assests/images/moneypechu 1.png'
export default function Navbar()

{
  
  return (
    
     

  <div className="navbar">    
  
  <ul className="home">
      <li><Link to="home" spy={true} smooth={true} duration={1000}id="homenav">Home</Link></li>
     <li><Link to="about" spy={true} smooth={true} duration={1000} id="aboutnav">About</Link></li>
      </ul>

      
      <img src={image} id="navi" alt="mp"/>

      <div className="callus">
      <button id="call" ><p className="ca">Call Us</p></button>
      </div>
      </div>
  



                
    

  ); 
  }

