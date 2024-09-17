import "./Products.scss"
import useFetchData from '../../hooks/useFetchData';
import { Link } from 'react-router-dom';
import {Container} from "../../utils/Components";

const Products = () => {
  const [data, isLoading] = useFetchData("products");
  if(isLoading){
    return <p>isloading....</p>  
  }
  const products = Array.isArray(data.products) ? data.products : [];
  return (
    <section className='product__wrapper'>
      <Container>
        <span className="product__add">
            <a href="products/add">ADD NEW PRODUCT</a>
        </span>
        <h2 className='product__title'>There are all products.</h2>
        <div className="product__list-wrapper">
          {!isLoading && products.length > 0 ?
            products.map(({id,title, images, category, price}) => 
              <Link to={`/${id}`} className='product__item' key={id}>
                <div className='product__item-wrapper'>
                  <img src={images} alt="" />
                  <h3>{title}</h3>
                  <p>{category}</p>
                  <p>{price}</p>
                </div>
              </Link>  
            ): <p>Loading...</p>
          }
        </div>
        <span className="product__cat-link">
            <a href="products/categories">Categories</a>
        </span>
      </Container>
    </section>
  )
}

export default Products