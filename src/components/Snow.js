import React from 'react';
import Slide from 'react-reveal/Slide';
import Nav from './Nav';
import Photo from './Photo';
import '../css/Page.css';
import '../css/Snow.css';

function Sea() {
  return (
    <div className="snow-background background">

        <Nav color="black"></Nav>

        <div id="snow" className="page-title">
           <Slide duration={1000} left>Snow</Slide> 
        </div>

        <div className="flex-container photos">
            <Photo className="photo" photographer="Alberto Restifo" data-toggle="modal" data-target="#exampleModalCenter" image={require("../images/snow/view.jpg")} ></Photo>
            <Photo className="photo" photographer="Aaron Burden" image={require("../images/snow/snowflake.jpg")} ></Photo>
            <Photo className="photo" photographer="Kate Moum" image={require("../images/snow/mountains.jpg")} ></Photo>
        </div>
    </div>
  );
}


export default Sea;