import React from 'react';
import Nav from './Nav';
import Photo from './Photo';
import '../css/Page.css';
import '../css/Abstract.css';

function Abstract() {
  return (
    <div className="abstract-background background">
        <Nav color="white"></Nav>
        <div id="abstract" className="page-title">
            Abstract
        </div>
        <div className="flex-container photos">
            <Photo className="photo" photographer="photo" image={require("../images/abstract/smokey.jpg")} ></Photo>
            <Photo className="photo" photographer="photo" image={require("../images/abstract/painting.jpg")} ></Photo>
            <Photo className="photo" photographer="photo" image={require("../images/abstract/icey.jpg")} ></Photo>
        </div>
    </div>
  );
}


export default Abstract;