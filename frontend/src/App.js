import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import NewPlace from './places/pages/NewPlace';
import Users from "./user/pages/users";


const App = () => {
  
  return (
    <Router>
      <Switch>
        <Route path="/" exact> 
          <Users/>
        </Route>
        <Route path="/places/new" exact> 
          <NewPlace/>
        </Route>

        <Redirect to="/" />
      </Switch>

    </Router>


  );
};

export default App;
