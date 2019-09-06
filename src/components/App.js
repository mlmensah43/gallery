import React from 'react';
import { HashRouter as Router, Route} from "react-router-dom";
import Home from './Home';
import Sea from './Sea';
import Snow from './Snow';
import Abstract  from './Abstract';
import Skyline from './Skyline';

function App() {
  return (
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/Sea" exact component={Sea} />
        <Route path="/Snow" exact component={Snow} />
        <Route path="/Abstract" exact component={Abstract} />
        <Route path="/Skyline" exact component={Skyline} />
      </Router>
  );
}

export default App;
