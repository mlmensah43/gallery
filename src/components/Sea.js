import React from 'react';
import Nav from './Nav';
import Photo from './Photo';
import '../css/Page.css';
import '../css/Sea.css';

function Sea() {
  return (
    <body className="sea-background">
      <div>
        <Nav color="white"></Nav>
        <div id="sea" className="page-title">
            Under the Sea
        </div>
        <div className="flex-container photos">
            <Photo className="photo" photographer="photo" image={require("../images/sea/fish.jpg")} ></Photo>
            <Photo className="photo" photographer="photo" image={require("../images/sea/starfish.jpg")} ></Photo>
            <Photo className="photo" photographer="photo" image={require("../images/sea/jellyfish.jpg")} ></Photo>
        </div>
    </div>
    </body>
    
  );
}


export default Sea;