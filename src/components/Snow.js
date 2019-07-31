import React from 'react';
import Nav from './Nav';
import Photo from './Photo';
import '../css/Page.css';
import '../css/Snow.css';

function Sea() {
  return (
    <div>
        <Nav color="black"></Nav>
        <div id="snow" className="page-title">
            Snow
        </div>
        <div className="flex-container photos">
            <Photo className="photo" photographer="photo" image={require("../images/snow/view.jpg")} ></Photo>
            <Photo className="photo" photographer="photo" image={require("../images/snow/snowflake.jpg")} ></Photo>
            <Photo className="photo" photographer="photo" image={require("../images/snow/mountains.jpg")} ></Photo>
        </div>
    </div>
  );
}


export default Sea;