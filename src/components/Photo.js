import React from 'react';
import ModalImage from "react-modal-image";
import '../css/Photo.css';

function Photo(props) {
  return (
    <div>
        <div className="box">
          <ModalImage
            className="image"
            hideDownload="true"
            hideZoom="true"
            small={props.image}
            large={props.image}
            alt={props.photographer}
          />
        </div>
    </div>
    
  );
}


export default Photo;