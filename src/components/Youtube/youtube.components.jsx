import React from 'react';
import './assests/css/youtube.css';
import img from './assests/images/Rectangle 7.png';
import img1 from './assests/images/Rectangle 8.png';
export default function Youtube()
{
    return (
        <div className="channels">
            <p className="texts">Our Youtube Channels For You</p>
            <div className="channel">
                <ul>
                <li><img src={img} alt="Tamil Youtube"/>
                <p className="big">Be Rich</p>
                <p className="english">Financial Advice in English</p>
                <button>
                    <p className="button"><a href="https://www.youtube.com/channel/UCZ-RwglseBp2cAuHwYGb91Q" target="_blank" rel="noreferrer"> Explore</a></p></button>
                </li>
            
            <li><img src={img1} alt="English Youtube"/>
            <p className="big1">Thathuva Pechu</p>
            <p className="health">Philosophy Life Health</p>
            <button><p className="button"><a href="https://www.youtube.com/channel/UCrfwMUFeZZ4RBO7xTkmD3QA" target="_blank" rel="noreferrer">Explore</a></p></button>
            </li>
            </ul>
            </div>
        </div>
    );
}