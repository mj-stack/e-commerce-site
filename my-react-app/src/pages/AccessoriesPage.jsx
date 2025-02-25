import Header from '../components/Header'
import { Categories } from '../components/Categories'
import Footer from '../components/Footer'
import './AccessoriesPage.css'

export function AccessoriesPage() {
  return(
    <>
      <Header />
      <Categories />
      <section className='accessories-section'></section>
      <Footer />
    </>
  )
}