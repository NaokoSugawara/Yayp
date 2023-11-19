import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import ProfileButton from './ProfileButton';
import './NavigationBar.css';
import LoginFormPage from '../LoginFormPage';
import SignupFormPage from '../SignupFormPage';
import { openModal } from '../../store/ui';
import { openPage } from '../../store/ui';
import { closeModal } from '../../store/ui';
import * as sessionActions from "../../store/session";
import yelp_log from "./yelp_icon.png"

const NavigationBar = () => {
  
  const sessionUser = useSelector(state => state.session.user);

  // let sessionLinks;
  // if (sessionUser) {
  //   sessionLinks = (
  //     <ProfileButton user={sessionUser} />
  //   );
  // } else {
  //   sessionLinks = (
  //     <>
  //       {/* <LoginFormModal /> */}
  //       <NavLink to="/signup">Sign Up</NavLink>
  //       <NavLink to="/login">Login</NavLink>
  //     </>
  //   );
  // } 

  
  // const [modal, setModal] = useState(false);
  // const [showLoginFormPage, setLoginFormPage] = useState(false);
  // const [showSigninFormPage, setSigninFormPage] = useState(false);
  // const modal = useSelector(state => state.ui);
  const dispatch = useDispatch();

  const openLogin = (e) => {
    e.preventDefault();
    dispatch(openModal("login"));
  }
  
  const openSignup = (e) => {
    e.preventDefault();
    dispatch(openModal("signup"));
  }

  const openBusiness = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    dispatch(openPage("business"));
  }

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    dispatch(closeModal());
  };

  // document.addEventListener('onload', () => {
  //   // Get references to the button and hidden content
  //   const businessButton = document.getElementById('business-button');
  //   const businessPulldown = document.getElementById('business-pulldown');
  
  //   // Add a click event listener to the button
  //   businessButton.addEventListener('click', () => {
  //     // Toggle the 'hidden' class on the content to show/hide it
  //     businessPulldown.classList.toggle('hidden');
  //   });
  // });

  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = (e) => {
    e.preventDefault();
    setMenuOpen(!isMenuOpen);
  };

  let button;
  if (!sessionUser) {
    button = 
      (<>
          <button
            className='button-style' 
            type="submit" 
            onClick={openLogin}
          >
            <div className="button-text button-text-login" data-font-weight="semibold">
              Log In
            </div>
          </button>
          <button 
              className='button-style button-signup'
              type="submit" 
              onClick={openSignup}
            >
            <div className="button-text" data-font-weight="semibold" >
              Sign Up
            </div>
          </button>
        </>
      );
  } else {
    button = (
      <button 
        className='button-style button-signup'
        type="submit" 
        onClick={logout}
      >
        <div className="button-text" data-font-weight="semibold" >
          Log Out
        </div>
      </button>
    );
  }

  return (
    <>
      <LoginFormPage />
      <SignupFormPage />
      <div className='outer-container' onClick={(e) => toggleMenu(e)}>
        <div className='.outer-container2'>
          <div className='above'>
            <div className='yelp'>
              <img src={yelp_log}/>
              
            </div>
            <div className='search'> 
              <div className='search2'>
                
              </div>
            </div>
            <div className='right'>
              {/* <div className='business'> */}
              <button className='business-button' onClick={(e) => toggleMenu(e)}>
                Yelp for Business
              </button>
              {isMenuOpen && 
                (<div id='business-pulldown'>
                  <div className='business-button pulldown-line'>
                    <button 
                      className='pulldown-line-button'
                      type="submit" 
                      onClick={openBusiness}>
                        Add a Business
                    </button>
                  </div>
                </div> )}
              <button className='business-button reviews-div'>
                {/* <div className='reviews'>reviewsreviewsrevi</div> */}
                Write a Review
              </button>
              <div className='buttons-div'>
                {button}  
              </div>
              {/* <NavLink exact to="/">Home</NavLink> */}
              {/* {sessionLinks} */}
            </div>
          </div>
          <div className='below'>

          </div>

        </div>
      </div>
      
    </>
  )
}

export default NavigationBar;
