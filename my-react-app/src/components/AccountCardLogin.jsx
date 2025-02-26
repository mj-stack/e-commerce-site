import { useState } from 'react';
import { Link } from 'react-router';
import './AccountCardLogin.css';

export function AccountCardLogin() {
  const [ eyeOpen, setEyeOpen] = useState('close');
  
    function showPassword() {
      if(eyeOpen === 'close') {
        setEyeOpen('open');
      } else {
        setEyeOpen('close');
      }
    }

  return(
    <>
      <div className='accounts-card-login'>
          <h1>Login</h1>
          <input className='email-input' placeholder='Email' type= "email" />
          <div className='password-input-div'>
            <input className='password-input' placeholder='Password' type= {eyeOpen === "close" ? "password" : "text"} />
            <img onClick={showPassword} value={eyeOpen} className='password-eye-img' src={`images/${eyeOpen}-eye.png`} alt="" />
          </div>
          <button className='login-button'>
            <Link className='login-button-text' to="/">
              Login
            </Link>
          </button>
          <div className='sign-up-div'>
            <span>
              Do not have an account?
              <span className='sign-up-text'>
                <Link to="/account-signup" className='sign-up-text'>
                  Sign up
                </Link>
              </span> here.
            </span>
          </div>
      </div>
    </>
  );
}