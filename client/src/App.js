import './App.css';
import React from "react";
import Home from "./component/Home"
import Register from "./component/Register";
import Loginpage from "./component/Loginpage";


import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function App() {

  return (
    <>
    <Router>

    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/register' component={Register}/>
      <Route path='/login' component={Loginpage}/>
     
    </Switch>
    </Router>
    </>
  );
}

export default App;
