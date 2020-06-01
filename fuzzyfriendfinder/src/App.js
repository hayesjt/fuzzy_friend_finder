import React, { Component } from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Home from './components/Home';

function App () {
  return (
  
  <Route path="/" component={Home}></Route>

  )
}

export default App;
