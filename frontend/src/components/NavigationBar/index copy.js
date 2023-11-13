import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import ProfileButton from './ProfileButton';
import './NavigationBar.css';
import LoginFormPage from '../LoginFormPage';
import SignupFormPage from '../SignupFormPage';
import { openModal } from '../../store/ui';

const NavigationBar = ({login}) => {

  debugger
  let content = null;
  if ( !login ) {
    content = (
      <>
        <button 
          type="submit" 
          onClick={openLogin}
          >
          <span className="button-text" data-font-weight="semibold">
            Log In
          </span>
        </button>
        <button 
          className='button-signup'
          type="submit" 
          onClick={openSignup}
          >
          <span className="button-text" data-font-weight="semibold" >
            Sign Up
          </span>
        </button> 
      </>
    )
  }

  // const sessionUser = useSelector(state => state.session.user);

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

  return (
    <>
      <LoginFormPage />
      <SignupFormPage />
      <div className='outer-container'>
        <ul>
          <li className='li-1'>

          </li>
          <li className='li-2'>

          </li> 
          <li className='li-3'>
            {/* <NavLink exact to="/">Home</NavLink> */}
            {/* {sessionLinks} */}
            {content}
          </li>
        </ul>
      </div>
    </>
  )
}

export default NavigationBar;
