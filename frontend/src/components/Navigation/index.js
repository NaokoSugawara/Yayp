import React from 'react';
import './Navigation.css';
import NavigationBar from '../NavigationBar';
import ImageCarousel from '../ImageCarousel';
import LoginFormPage from '../LoginFormPage';
import SignupFormPage from '../SignupFormPage';
import { Route, Switch } from "react-router-dom";

function Navigation() {

  return (
    <>
      <Switch>
        <Route path="/login" >
          <LoginFormPage />
        </Route>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
      </Switch> 

      <NavigationBar />
      {/* <SignupFormPage />  */}

      <ImageCarousel />
      {/* <Footer /> */}
    </>

  );
}

export default Navigation;
