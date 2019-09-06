import React from 'react';
import {Link} from "react-router-dom";
import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';
// import Pulse from 'react-reveal/Pulse';
import '../css/Home.css';

function Home() {
  return (
        <div className="home-background">

            <div className="title">
                <Fade duration={3000} bottom>Gallery</Fade>
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
                <Jump delay={4000} duration={1500} forever>CHOOSE ONE TO GET STARTED</Jump>
            </div>
            
        </div>
  );
}

export default Home;