import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import LandingView from './views/landingView/LandingView';
import NavBar from './components/navbar/NavBar';
import Signup from './views/signupComponent/Signup';

const RouterComponent = () => {
  return (
    <Router className="view gradient">
      <div>
        <NavBar />
        <ToastContainer />
        <Switch>
          <Route path="/" component={LandingView} exact />
          <Route path="/menu" component={LandingView} exact />
          <Route path="/signup" component={Signup} exact />
        </Switch>
      </div>
    </Router>
  );
};
export default RouterComponent;
