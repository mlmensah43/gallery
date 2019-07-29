import React from 'react';
import './css/Nav.css';

function Nav(props) {
  return (
    <div className={`flex-container nav-item ${ props.color }`}>
        <div className="nav-items" >under the sea</div>
        <div className="nav-items">snow</div>
        <div className="nav-items">abstract</div>
        <div className="nav-items">skyline</div>
    </div>
  );
}


export default Nav;
