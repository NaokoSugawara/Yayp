import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import NavigationBar from './components/NavigationBar';
import ImageCarousel from './components/ImageCarousel';
import BusinessFormPage from './components/BusinessFormPage';

function App() {
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

      <div className="main">
        <NavigationBar />

        <ImageCarousel />
        <BusinessFormPage />
      </div>

      {/* <Footer /> */}
    </>
  );
}

export default App;