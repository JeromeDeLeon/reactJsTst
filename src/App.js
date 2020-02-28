import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import ViewProfile from './component/ViewProfile';
import Test from './component/Test'

function App() {
  return (
    <div className="App">
      test
      <Switch>

        
        <Route exeat paht='/viewProfile' component={ViewProfile}/>
        <Route exeat paht='/test' component={Test}/>
      </Switch>


    </div>
  );
}

export default App;
