/*import React,{ useState } from "react";
import logo from './logo.svg';
import {Route} from 'react-router-dom';
import './App.css';
// import { Login } from "./components/Login";
// import { Register } from "./components/Register";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import  {Register}  from "./components/Register";
import {Login} from "./components/Login";
import  Contact  from "./components/Contact";
import  About from "./components/About";


/* function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div className="App">
    {
      currentForm == "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
    }
    </div>
  );
} */
/* const App = () => {
  <>
    <Navbar />
    <Route path="/">
      <Home />
    </Route>
    <Route path="/about">
      <About />
    </Route>    
    <Route path="/contact">
      <Contact />
    </Route>
    <Route path="/login">
      <Login />
    </Route>     
    <Route path="/register">
      <Register />
    </Route>
     </>
}

export default App */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import {Login} from './components/Login';
import {Register} from './components/Register';


function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        
      </Switch>
      
    </div>
  );
}

export default App;

