import { Link } from 'react-router';
import './AccountsPageHeader.css';

export function AccountsPageHeader() {
  return(
    <>
      <header>
        <section className="left-section">
          <p className='brand-title-para'>
            <Link to="/" className="brand-title">
              MAGzine
            </Link>
          </p>
        </section>

        <section className="middle-section">
          
        </section>

        <section className="right-section">
          
        </section>
      </header>
    </>
  );
}