import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import ProfileButton from './ProfileButton';
import './NavigationBar.css';
import LoginFormPage from '../LoginFormPage';
import SignupFormPage from '../SignupFormPage';
import { openModal } from '../../store/ui';
import BusinessShowPage from '../BusinessShowPage';
import { openPage } from '../../store/ui'
import ImageCarousel from '../ImageCarousel';

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
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  let button;
  if (!sessionUser) {
    button = 
      (<div id='business-pulldown'>
        <div className='business-button pulldown-line'>
          <button 
            className='pulldown-line-button'
            type="submit" 
            onClick={openBusiness}>
              Add a Business
          </button>
        </div>
      </div> );
  } else {
    button = <></>;
  }

  return (
    <>
      <LoginFormPage />
      <SignupFormPage />
      <div className='outer-container'>
        <div className='.outer-container2'>
          <div className='above'>
            <div className='yelp'>
              <img src="/src/components/NavigationBar/yelp_icon2.jpg"/>
              
            </div>
            <div className='search'> 
              <div className='search2'>
                
              </div>
            </div>
            <div className='right'>
              {/* <div className='business'> */}
              <button className='business-button' onClick={toggleMenu}>
                Yelp for Business
                <path d="M 8 10.25 a 0.746 0.746 0 0 1 -0.525 -0.215 l -3.055 -3 a 0.75 0.75 0 0 1 1.05 -1.07 L 8 8.449 l 2.53 -2.484 a 0.75 0.75 0 0 1 1.05 1.07 l -3.055 3 A 0.746 0.746 0 0 1 8 10.25 Z"></path>
              </button>
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
