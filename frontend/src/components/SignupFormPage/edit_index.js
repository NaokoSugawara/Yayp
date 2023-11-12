import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  // if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, firstName, lastName, zipcode, password }))
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
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <div class="modal-body">
      <div class="modal-content">
        {/* <div class="dismiss-link">
          <button type="submit" >

          </button>
        </div> */}
        <div class="signin1">
          <div class="signin1-1">
            <img class="" height="48" src="https://s3-media0.fl.yelpcdn.com/assets/public/avatar_48x48_v2.yji-f2d31647d2d8bad45861.svg"></img>
          </div>
          <h2 class="signin1-h2">
            Sign in to Yelp
          </h2>
          <div class="signin1-3">
            <p class="signin1-3-p">
              Connect with great local businesses
            </p>
          </div>
          <div class="signin1-4">
            <p class="signin1-4-p">
              By proceeding, you agree to Yelp’s <a href="https://terms.yelp.com/tos/en_us/" class="css-1idmmu3" target="_blank">Terms of Service</a> and acknowledge Yelp’s <a href="https://terms.yelp.com/privacy/en_us/" class="css-1idmmu3" target="_blank">Privacy Policy</a>
            </p>
          </div>
        </div>
        <div class="signin2">
        </div>
        <div class="signin3">
        </div>
        <div class="signin4">


          <form class="form" onSubmit={handleSubmit}>
            <ul>
              {errors.map(error => <li key={error}>{error}</li>)}
            </ul>
            <div class="form-div1">
              <div class="form-div2">
                <div class="form-label">
                  <label class="form-label">
                    <input 
                      class="form-input"
                      type="email"
                      // value={credential}
                      // onChange={(e) => setCredential(e.target.value)}
                      required />
                      <span class="form-span">
                        Email
                      </span>
                  </label>
                </div> 
              </div>
            </div>
            <div class="form-div1">
              <div class="form-div2">
                <div class="form-label">
                  <label class="form-label">
                    <input 
                      class="form-input"
                      type="password"
                      // value={password}
                      // onChange={(e) => setPassword(e.target.value)}
                      required />
                      <span class="form-span">
                        password
                      </span>
                  </label>
                </div> 
              </div>
            </div>
            <div class="form-button-div">
            </div>
            <button class="form-button" type="submit">Log In</button>
            <div class="form-bottom">
            </div>
          </form>


        </div>
        <div class="signin5">
        </div>
        <p class="signin5-p">
          New to Yelp?
          <button class="signup-button">
            <span class="signup-button-span">&nbsp;Sign up</span>
          </button>
        </p>
      </div>
    </div>
  );
}

export default SignupFormPage;