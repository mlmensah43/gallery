import React from 'react';
import {Link} from "react-router-dom";
import '../css/Home.css';

function Home() {
  return (
        <div id="home-background">
            <div className="title">
                Gallery
            </div>
            
            <div>
                <ul id="ul">
                    <li className="subtitle"><Link to="/Sea">sea</Link></li>
                    <li className="subtitle"><Link to="/Snow">snow</Link></li>
                    <li className="subtitle"><Link to="/Abstract">abstract</Link></li>
                    <li className="subtitle"><Link to="/Skyline">skyline</Link></li>
                </ul>
            </div>

            <div className="subtitle prompt">
                CHOOSE ONE TO GET STARTED
            </div>
        </div>
  );
}

export default Home;