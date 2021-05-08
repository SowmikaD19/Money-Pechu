import React from 'react';
import './assests/css/home.css';

import imagehomeone from './assests/images/screen.png'


export default function Home()

{
  
  return (   <div className="abc">
  <div className="homemp">
  <p className="pone">The most important </p>
  <p className="pone" >   investment you can make </p>
    <p className="pone">is in yourself</p>
    <div className="smallpara">
       Mr.Anand Srinivasan helps you with the best investment guidance 
    </div>
    <div className="smallparaone">
    that will enhance your financial life in future!
    </div>
    
      
<button className="button button1">Contact</button>
<button className="button button2">Learn More</button>

        
  <img src={imagehomeone} id="homeimage" alt="mphome"/>
  
 

</div></div>
);
}
    