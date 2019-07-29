import React from 'react';
import './css/Photo.css';

function Photo(props) {
  return (
    <div>
        <div className="box">
            <span className="image-gap"><img className="image" src={props.image} alt="not rendered"></img></span>
        </div>
    </div>
    
  );
}


export default Photo;