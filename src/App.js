import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


// Pages

import Home from "./Home";


function App() {
  
  

  return (
    <Router id="image_background">
    <div className="App" id="image_background" >

        
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Heatmap">Heat Map</Link></li>
            <li><Link to="/Bars">Statistics</Link></li>
            <li><Link to="/seyed">Seyed Page (undetermined yet)</Link></li>
            
        </ul>
        <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/Heatmap"><Heat_map /></Route>
            <Route path="/Bars"><Bars /></Route>
            <Route path="/seyed"><Seyed /></Route>


            
           
        </Switch>
            </div>


</Router>
  );
}

export default App;
