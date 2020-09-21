import React from 'react';
import './App.css';
import Drawer from './Components/Drawer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DashboardPage from './Pages/Dashboard';
import ProfilePage from './Pages/Profile';
import SettingsPage from './Pages/Settings';
import HomePage from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Drawer />
            <HomePage />
          </Route>
        </Switch>
        <Switch>
          <Route path="/dashboard">
            <Drawer />
            <DashboardPage />
          </Route>
        </Switch>
        <Switch>
          <Route path="/profile">
            <Drawer />
            <ProfilePage />
          </Route>
        </Switch>
        <Switch>
          <Route path="/settings">
            <Drawer />
            <SettingsPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
