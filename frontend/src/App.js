import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Redirect, 
  Switch 
} from 'react-router-dom';
import './App.css';
import NewPlace from './places/pages/NewPlace';
import Users from "./user/pages/users";
import UserPlaces from "./places/pages/userPlaces"
import MainNavigation from './shared/components/navigation/mainNavigatin/mainNavigation';


const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/:userId/places" exact>
            <UserPlaces />
          </Route>
          <Route path="/places/new" exact>
            <NewPlace />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;

