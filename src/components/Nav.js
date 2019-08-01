import React from 'react';
import {Link} from "react-router-dom";
import '../css/Nav.css';

function Nav(props) {
  return (
      <div className={`flex-container nav-items`}>
        <ul>
          <li className="nav-item"><Link to="/Sea"  className={ props.color }>sea</Link></li>
          <li className="nav-item link"><Link to="/Snow" className={ props.color }>snow</Link></li> 
          <li className="nav-item link"><Link to="/Abstract" className={ props.color }>abstract</Link></li>  
          <li className="nav-item link"><Link to="/Skyline" className={ props.color }>skyline</Link></li>
        </ul>
      </div>
    
  );
}


export default Nav;
