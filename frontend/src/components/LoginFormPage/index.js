import React, { useEffect, useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import './LoginForm.css';
import { Link } from 'react-router-dom';
import { openModal, closeModal } from "../../store/ui";


const LoginFormPage = () => {

  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const modal = useSelector(state => state.ui.modal);
  let login = false;

  // const [showLoginFormPage, setLoginFormPage] = useState(true);
  // let showLoginFormPage = true;

  // if (sessionUser) {
  //   login = true;
  //   return <Redirect to="/" login={login} />;
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .then(() => dispatch(closeModal()))
      .catch(async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if, e.g., server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });

  };

  // const openSignup = (e) => {
  //   e.preventDefault();
  //   dispatch(openModal("signup"));
  //   // history.push("/signup");
  // }

  // if (modal === "login") {
  //   const modalContainer = document.getElementsByClassName("login-modal-body")[0];
  //   modalContainer.addEventListener("click", () => (dispatch(closeModal())))
  // }

  return (
    <>
      { (modal === "login") && 
        <div className="login-modal-body" onClick={() => dispatch(closeModal())}>
          <div className="login-modal-content" onClick={(e) => e.stopPropagation()}>
           { (errors.length > 0) ? (
              <ul className="error">
                {errors.map((error) => <li key={error}>{error}</li>)}
              </ul>
            ) : "" }
            <div className="close-button-div">
              <button className="close-button" onClick={() => dispatch(closeModal())}>
                
              </button>
            </div>
            <div className="signin1">
              <div className="signin1-1">
                <img className="" height="48" src="https://s3-media0.fl.yelpcdn.com/assets/public/avatar_48x48_v2.yji-f2d31647d2d8bad45861.svg"></img>
              </div>
              <h2 className="signin1-h2">
                Sign in to Yelp
              </h2>
              <div className="signin1-3">
                <p className="signin1-3-p">
                  Connect with great local businesses
                </p>
              </div>
              <div className="signin1-4">
                <p className="signin1-4-p">
                  By proceeding, you agree to Yelp’s <a href="https://terms.yelp.com/tos/en_us/" className="css-1idmmu3" target="_blank">Terms of Service</a> and acknowledge Yelp’s <a href="https://terms.yelp.com/privacy/en_us/" className="css-1idmmu3" target="_blank">Privacy Policy</a>
                </p>
              </div>
            </div>
            <div className="signin2">
            </div>
            <div className="signin3">
            </div>
            <div className="signin4">
              <form className="form" onSubmit={handleSubmit}>
                {/* <ul>
                  {errors.map(error => <li key={error}>{error}</li>)}
                </ul> */}
                <div className="form-div1">
                  <div className="form-div2">
                    <div className="form-label">
                      <label className="form-label">
                        <input 
                          className="form-input"
                          type="email"
                          placeholder="Email"
                          value={credential}
                          onChange={(e) => setCredential(e.target.value)}
                          required />
                          {/* <span className="form-span">
                          </span> */}
                      </label>
                    </div> 
                  </div>
                </div>
                <div className="form-div1">
                  <div className="form-div2">
                    <div className="form-label">
                      <label className="form-label">
                        <input 
                          className="form-input"
                          type="password"
                          placeholder="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required />
                          {/* <span className="form-span">
                            password
                          </span> */}
                      </label>
                    </div> 
                  </div>
                </div>
                <div className="form-button-div">
                </div>
                <button className="form-button" type="submit">Log In</button>
                <div className="form-bottom">
                </div>
              </form>
            </div>
            <div className="signin5">
            </div>
            <p className="signin5-p">
              New to Yelp?
              <button className="signup-button" onClick={() => dispatch(openModal("signup"))}>
                <span className="signup-button-span">
                  &nbsp;Sign up
                </span>
              </button>
            </p>
          </div>
        </div>
      } 
    </>
    )
}

export default LoginFormPage;