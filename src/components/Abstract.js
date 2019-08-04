import React from 'react';
import Slide from 'react-reveal/Slide';
import Nav from './Nav';
import Photo from './Photo';
import '../css/Page.css';
import '../css/Abstract.css';

function Abstract() {
  return (
    <div className="abstract-background background">
        
        <Nav color="white"></Nav>
        
        <div id="abstract" className="page-title">
          <Slide duration={1000} left>Abstract</Slide> 
        </div>
        
        <div className="flex-container photos">
            <Photo className="photo" photographer="Geordanna Cordero-Fields" image={require("../images/abstract/smokey.jpg")} ></Photo>
            <Photo className="photo" photographer="Ruvim Noga" image={require("../images/abstract/painting.jpg")} ></Photo>
            <Photo className="photo" photographer="Raychan" image={require("../images/abstract/icey.jpg")} ></Photo>
        </div>
        
    </div>
  );
}


export default Abstract;