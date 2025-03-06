import { AccountsPageHeader } from '../pages/Accounts/AccountsPageHeader';
import { Link } from 'react-router';
import './AccountCardSignup.css';
import Footer from './Footer';

export function AccountCardSignup() {
  return(
    <>
      <AccountsPageHeader />
      <main className='accounts-card-div'>
        <div className='accounts-card-signup'>
            <form className='signup-form'>
              <h1>Sign Up</h1>
              <div>
                <input className='name-input' type="text" placeholder='Name' />
                <input className='surname-input' type="text" placeholder='Surname' />
              </div>
              <input className='email-input2' type="email" placeholder='Email' />
              <input className='number-input' type="email" placeholder='Phone no.' />
              <button className='signup-button'>
                <Link className='signup-button' to="/">
                  Sign up
                </Link>
              </button>
            </form>
            <div className='sign-up-div'>
              <span>
                Already have an account?
                  <span className='sign-up-text'>
                    <Link to="/account-login" className='sign-up-text'>
                      Login
                    </Link>
                  </span> here.
              </span>
            </div>
        </div>
      </main>
      <Footer />
    </>
  );
}