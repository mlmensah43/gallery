import React from 'react';
import Nav from './Nav';
import Photo from './Photo';
import '../css/Page.css';
import '../css/Skyline.css';

function Skyline() {
  return (
    <div className="skyline-background">
        <Nav color="white"></Nav>
        <div id="skyline" className="page-title">
            Skyline
        </div>
        <div className="flex-container photos">
            <Photo className="photo" photographer="photo" image={require("../images/skyline/square.jpg")} ></Photo>
            <Photo className="photo" photographer="photo" image={require("../images/skyline/top.jpg")} ></Photo>
            <Photo className="photo" photographer="photo" image={require("../images/skyline/blue.jpg")} ></Photo>
        </div>
    </div>
  );
}


export default Skyline;