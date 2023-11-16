import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';
import { closeModal } from "../../store/ui";

const SignupFormPage = () => {

  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const modal = useSelector(state => state.ui.modal);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, password, first_name, last_name, zipcode }))
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
    // }
    // return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  //   const modalContainer = document.getElementsByClassName("login-modal-body")[0];
  //   modalContainer.addEventListener("click", () => (dispatch(closeModal())))

  // document.addEventListener('onload', () => {
      // if (!errors.length) {
      //   // debugger
      //   const errorUl = document.getElementById('error');
      //   errorUl.style.display = 'none';
      // }
  // })


  return (
    <>
      { (modal === "signup") && 
        <div className="signup-modal-body" onClick={() => dispatch(closeModal())}>
          <div className="signup-modal-content" onClick={(e) => e.stopPropagation()}>
            { (errors.length > 0) ? (
              <ul className="error">
                {errors.map((error) => <li key={error}>{error}</li>)}
              </ul>
            ) : "" }
            <div className="close-button-div">
              <button className="close-button" onClick={() => dispatch(closeModal())}>
                
              </button>
            </div>
            <h2>Sign up for Yelp</h2>
            <div className="signup-terms">
              <p className="signup-terms-p">
                By proceeding, you agree to Yelp’s <a href="https://terms.yelp.com/tos/en_us/" className="css-1idmmu3" target="_blank">Terms of Service</a> and acknowledge Yelp’s <a href="https://terms.yelp.com/privacy/en_us/" className="css-1idmmu3" target="_blank">Privacy Policy</a>
              </p>
            </div>
            <div className="signup-container">
              <form onSubmit={handleSubmit}>
                <div className="first-line">
                  <input className="name" type="text" placeholder="First Name"
                      value={first_name}
                      onChange={(e) => setFirstName(e.target.value)}
                      required />
                  <input className="name" type="text" placeholder="Last Name"
                      value={last_name}
                      onChange={(e) => setLastName(e.target.value)}
                      required />
                </div>
                <div className="table">
                  <input className="tr" type="text" placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required />
                  <input className="tr" type="password" placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required/>
                  <input className="tr" type="text" placeholder="Zip Code"
                      value={zipcode}
                      onChange={(e) => setZipcode(e.target.value)}
                      required/>
                </div>
                <div className="birthday-div">
                  <div className="bithday-label">
                    <span className="birthday-span">Birthday</span>
                    <span className="birthday-span2">&nbsp;Optional</span>
                  </div>
                  <input className="birthday-input" type="date" placeholder="Birthday"/>
                </div>
                <div className="form-button-div">
                </div>
                <button className="form-button" type="submit">Sign up</button>
                <div className="form-bottom">
                </div>
              </form>
              <div className="bottom">
                <p className="bottom-p">
                  "Already on Yelp? "
                  <button className="bottom-login">
                    <span className="login-span">Log in</span>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default SignupFormPage;