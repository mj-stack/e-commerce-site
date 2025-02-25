import Header from '../components/Header';
import Footer from '../components/Footer';
import { Categories } from '../components/Categories';
import './ShoesPage.css'

export function ShoesPage() {
  return(
    <>
      <Header />
      <Categories />
      <section className='shoes-section'></section>    
      <Footer />  
    </>
  );
}