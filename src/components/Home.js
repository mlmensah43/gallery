import React from 'react';
import {Link} from "react-router-dom";
import Reveal from 'react-reveal/Reveal';
import '../css/Home.css';

function Home() {
  return (
        <div className="home-background">
            <div className="title">
                Gallery
            </div>
            
            <div>
                <ul id="ul">
                    <li className="subtitle link"><Link to="/Sea" style={{ color: '#FFFFFF' }}>sea</Link></li>
                    <li className="subtitle link"><Link to="/Snow" style={{ color: '#FFFFFF' }}>snow</Link></li>
                    <li className="subtitle link"><Link to="/Abstract" style={{ color: '#FFFFFF' }}>abstract</Link></li>
                    <li className="subtitle link"><Link to="/Skyline" style={{ color: '#FFFFFF' }}>skyline</Link></li>
                </ul>
            </div>

            <div className="subtitle prompt">
                CHOOSE ONE TO GET STARTED
            </div>
        </div>
  );
}

export default Home;