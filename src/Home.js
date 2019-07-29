import React from 'react';
import Nav from './Nav';
import './css/Home.css';

function Home() {
  return (
      <div>
            <div className="title">
                Gallery
            </div>

            <div className="subtitle">
                <ul>
                    <li>UNDER THE SEA</li>
                    <li>SNOW</li>
                    <li>ABSTRACT</li>
                    <li>SKYLINE</li>
                </ul>
            </div>

            <div className="subtitle prompt">
                CHOOSE ONE TO GET STARTED
            </div>
      </div>
        
    
  );
}

export default Home;