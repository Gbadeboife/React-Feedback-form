import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Form from './components/form';
import Success from './components/sucess';
import Failure from './components/failure';



function App() {
  return (
    <div>
      <Router>  
        <Route exact path='/'><Form/></Route>
        <Route path='/success'><Success/></Route>
        <Route path='/failure'><Failure/></Route>
      </Router>
    </div> 
  )
}

export default App;
