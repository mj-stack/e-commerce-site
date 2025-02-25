import { Link } from 'react-router';
import './Categories.css'

export function Categories() {
  return(
    <div className='product-type'>
      <div className='clothes-center'>
        <Link to="/clothes" className='link-text'>
          Clothes
        </Link>
      </div>
      <div className='shoes-center'>
        <Link to="/shoes" className='link-text'>
          Shoes
        </Link>
      </div>
      <div className='accessories-center'>
        <Link to="/accessories" className='link-text'>
          Accessories
        </Link>
      </div>
    </div>
  );
}