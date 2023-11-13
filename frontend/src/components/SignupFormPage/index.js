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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const modal = useSelector(state => state.ui.modal);

  if (sessionUser) return <Redirect to="/" />;

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
      <>
        { (modal === "signup") && 
          <div className="login-modal-body" onClick={() => dispatch(closeModal())}>
            <div className="login-modal-content" onClick={(e) => e.stopPropagation()}>
              <h2>Sign up for Yelp</h2>
              <div className="signup-terms">
                <p className="signup-terms-p">
                  By proceeding, you agree to Yelp’s <a href="https://terms.yelp.com/tos/en_us/" className="css-1idmmu3" target="_blank">Terms of Service</a> and acknowledge Yelp’s <a href="https://terms.yelp.com/privacy/en_us/" className="css-1idmmu3" target="_blank">Privacy Policy</a>
                </p>
              </div>
              <div className="signup-container">
                <form>
                  <div className="first-line">
                    <input className="name" />テキストが入ります
                    <input className="name" />テキストが入ります
                  </div>
                  <div className="table">
                    <div className="tr">
                      <div>テキストが入ります</div>
                    </div>
                    <div className="tr">
                      <div>テキストが入ります</div>
                    </div>
                    <div className="tr">
                      <div>テキストが入ります</div>
                    </div>
                    <div className="tr">
                      <div>テキストが入ります</div>
                    </div>
                  </div>
                </form>
              </div>
              
                  {/* <form onSubmit={handleSubmit}>
                    <ul>
                      {errors.map((error) => <li key={error}>{error}</li>)}
                    </ul>
                    <div className="form-1">
                      <div className="form-1cell">
                        <label>
                          <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                          />
                          <span>
                          Email
                          </span>
                        </label>
                      </div>
                      <div className="form-1cell">
                        <label>
                          <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                          />
                          <span>
                            First Name
                          </span>
                        </label>
                      </div>
                    </div>


                    <label>
                      Last Name
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </label>
                    <label>
                      Last Name
                      <input
                        type="text"
                        value={zipcode}
                        onChange={(e) => setZipcode(e.target.value)}
                        required
                      />
                    </label>
                    <label>
                      Password
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </label>
                    <label>
                      Confirm Password
                      <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </label>
                    <button type="submit">Sign Up</button>
                  </form> */}
            </div>
          </div>
        }
      </>
    )
}

export default SignupFormPage;