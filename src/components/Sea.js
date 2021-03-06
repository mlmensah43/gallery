import React from 'react';
import Slide from 'react-reveal/Slide';
import Nav from './Nav';
import Photo from './Photo';
import '../css/Page.css';
import '../css/Sea.css';

function Sea() {
  return (
      <div className="sea-background background">
        <Nav color="white" underline="one"></Nav>

        <div id="sea" className="page-title">
           <Slide duration={1000} left>Under the Sea</Slide> 
        </div>

        <div className="flex-container photos">
            <Photo className="photo" photographer="David Clode" image={require("../images/sea/fish.jpg")} ></Photo>
            <Photo className="photo" photographer="David Clode" image={require("../images/sea/starfish.jpg")} ></Photo>
            <Photo className="photo" photographer="Octavian Rosca" image={require("../images/sea/jellyfish.jpg")} ></Photo>
        </div>
        
    </div>
    
  );
}


export default Sea;