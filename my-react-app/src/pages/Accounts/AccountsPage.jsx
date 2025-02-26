import { AccountsPageHeader } from './AccountsPageHeader';
import './AccountsPage.css';
import Footer from '../../components/Footer';
import { AccountCardLogin } from '../../components/AccountCardLogin';

export function AccountsPage() {

  return(
    <>
      <AccountsPageHeader />

      <main className='accounts-card-div'>
        <AccountCardLogin />
      </main>

      <Footer />
    </>
  );
}