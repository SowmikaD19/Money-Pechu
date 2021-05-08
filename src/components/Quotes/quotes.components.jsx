import React from 'react';
import './assests/css/quotes.css';
import image2 from './assests/images/Ellipse 2.png';
import image3 from './assests/images/Ellipse 3.png';
import image4 from './assests/images/Ellipse 4.png';
import image5 from './assests/images/Ellipse 5.png';
import image6 from './assests/images/Ellipse 6.png';
import image7 from './assests/images/Ellipse 7.png';
export default function Quotes()
{
    return (
        <div className="quotes">
            <p className="quote">Money <i>Quotes</i></p>
            <p className="anand">By, Mr.Anand Srinivasan</p>
            <div className="container1" id="c1">
                <p className="text1" id="t1">
                    “Time demands change in the way we earn money. This 
                    change will not be a crime 
                    rather than an art”</p>
            </div>
            <img className="clock" id="c" src={image2} alt="clock"/>
            <div className="container2" id="c2">
                <p className="text2" id="t2">
                “Money gives the financial 
freedom to the humans. It 
leaves his heart to do what he
wish in his life”</p>
            </div>
            <img className="heart" id="h" src={image3} alt="heart"/>
            
            <div className="container3" id="c3">
                <p className="text3" id="t3">
                ‘Easy is to earn money but it is hard to protect and grow”</p>
            </div>
            <img className="plant" id="p" src={image4} alt="plant"/>

            <div className="container4" id="c4">
                <p className="text4" id="t4">
                “People need to understand 
inflation before they start 
savings and investments”</p>
            </div>
            <img className="money" id="m" src={image5} alt="money"/>
            <div className="container5" id="c5">
                <p className="text5" id="t5">
                “Knowledge of savings and 
investment plan adjusted to 
the inflation is less among 
Indians. This is an Indian
Emergency call”</p>
            </div>
            <img className="bulb" id="b" src={image6} alt="bulb"/>
            <div className="container6" id="c6">
                <p className="text6" id="t6">
                ‘Saving should be the first 
expense of a family. Saving 
must be an investment rather 
in a piggy bank”</p>
            </div>
            <img className="pig" id="pi"src={image7} alt="pig"/>
        </div>
    );
}