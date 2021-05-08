import React from 'react'
import "./assets/css/contact.css"
import {FaFacebookSquare,FaInstagramSquare,FaTwitterSquare,FaMapMarkerAlt,FaPhoneSquareAlt } from "react-icons/fa";


function Contact()  {
    return(
         <div className="contact">    
           
         
        <div className="contact-box">
             
            <div className="contact-left">
               <form className="form">
                   <h1> Talk to us</h1>
                  </form>
                  <div className="container">
                     <div className="name-number">
                     <div className="name">
                  
                    <input placeholder="Enter your Name"/>
                    </div>
                    
                    <div className="number">
                       <input placeholder="Enter your Number"/>

                       </div>
                       </div>


                     <div className="email">
                      <input placeholder="Enter you Email Address"/>
                      </div>


                    <div className="message">
                     <textarea placeholder=" Your Message"></textarea>
                     </div>


                    <div className="btn">
                    <input type="submit" value="Send Now"></input> 
                    </div>
               </div>
               </div>

            <div className="contact-right">   
              {/* <a href="https://www.mapsdirections.info/en/measure-map-radius/">Map</a> */}
              <iframe title="contact" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Shresta%20Anand%20Apartments,%20Hanumanth%20Road,%20Balaji%20Nagar,%20Royapettah,%20Chennai%20-%20600014+(Your%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

            
              <div className="icons">
                 <a href="https://www.facebook.com/MoneyPechu/" target="_blank" rel="noreferrer"><FaFacebookSquare/></a>
                 <a href="https://www.instagram.com/anandsrinivasan/?hl=en" target="_blank" rel="noreferrer"><FaInstagramSquare/></a>
                 <a href="https://twitter.com/anand_srini?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noreferrer"><FaTwitterSquare/></a>
               </div>


              
               <div className="details">

                
               <div className="icon"><FaMapMarkerAlt/></div>
              <p> Shresta Anand Apartments,<br></br>
                Road, Balaji Nagar,<br></br>
                Royapettah, Chennai - 600014</p>

               
                 <div className="phicon"><FaPhoneSquareAlt/>  </div>
               <p><br/>+91 95000 94680</p>
               </div>
               
            
               </div>
               </div>

           </div>
        

    );
}

export default Contact;