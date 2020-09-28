import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import DashboardPage from './Pages/Dashboard';
// import ProfilePage from './Pages/Profile';
// import SettingsPage from './Pages/Settings';
// import HomePage from './Pages/Home';
import Page from './Components/Page';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Page title="Home Page" />
          </Route>
        </Switch>
        <Switch>
          <Route path="/dashboard">
            <Page title="Dashboard Page" />
          </Route>
        </Switch>
        <Switch>
          <Route path="/profile">
            <Page title="Profile Page" />
          </Route>
        </Switch>
        <Switch>
          <Route path="/settings">
            <Page title="Settings Page" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
