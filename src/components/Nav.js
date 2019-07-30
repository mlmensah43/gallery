import React from 'react';
import {Link} from "react-router-dom";
import '../css/Nav.css';

function Nav(props) {
  return (
      <div className={`flex-container nav-items ${ props.color }`}>
        <ul>
          <li className="nav-item"><Link to="/Sea">sea</Link></li>
          <li className="nav-item"><Link to="/Snow">snow</Link></li> 
          <li className="nav-item"><Link to="/Abstract">abstract</Link></li>  
          <li className="nav-item"><Link to="/Skyline">skyline</Link></li>
        </ul>
      </div>
    
  );
}


export default Nav;
