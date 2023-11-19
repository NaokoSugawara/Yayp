import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import NavigationBar from './components/NavigationBar';
import ImageCarousel from './components/ImageCarousel';
import BusinessShowPage from './components/BusinessShowPage';

function App() {
  return (
    <>
      <div className="main">
        <NavigationBar />

        {/* <ImageCarousel /> */}
        {/* <BusinessShowPage /> */}
      </div>

      <Switch>
        <Route path="/login" >
          <LoginFormPage />
        </Route>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
        <Route path="/businesses/:id">
          <BusinessShowPage />
        </Route>
      </Switch> 

      {/* <Footer /> */}
    </>
  );
}

export default App;