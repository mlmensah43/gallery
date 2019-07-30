import React from 'react';
import Nav from './Nav';
import Photo from './Photo';
import '../css/Page.css';
import '../css/Skyline.css';

function Skyline() {
  return (
    <div>
        <Nav color="white"></Nav>
        <div id="skyline" className="page-title">
            Skyline
        </div>
        <div className="flex-container photos">
            <Photo className="photo" photographer="photo" image={require("../images/starfish.jpg")} ></Photo>
            <Photo className="photo" photographer="photo" image={require("../images/starfish.jpg")} ></Photo>
            <Photo className="photo" photographer="photo" image={require("../images/starfish.jpg")} ></Photo>
        </div>
    </div>
  );
}


export default Skyline;