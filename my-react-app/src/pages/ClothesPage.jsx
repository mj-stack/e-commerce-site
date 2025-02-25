import Header from '../components/Header';
import Footer from '../components/Footer';
import { Categories } from '../components/Categories';
import './ClothesPage.css'

export function ClothesPage() {
  return(
    <>
      <Header />
      <Categories /> 
      <section className='clothes-section'></section>
      <Footer />
    </>
  );
}