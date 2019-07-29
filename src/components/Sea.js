import React from 'react';
import Nav from './components/Nav';
import Photo from './components/Photo';
import './css/Page.css';
import './css/Sea.css';

function Sea() {
  return (
    <div>
        <Nav color="white"></Nav>
        <div id="sea" className="page-title">
            Under the Sea
        </div>
        <div className="flex-container photos">
            <Photo className="photo" photographer="photo" image={require("./images/starfish.jpg")} ></Photo>
            <Photo className="photo" photographer="photo" image={require("./images/starfish.jpg")} ></Photo>
            <Photo className="photo" photographer="photo" image={require("./images/starfish.jpg")} ></Photo>
        </div>
    </div>
  );
}


export default Sea;