import "./Category.scss"
import useFetchData from '../../hooks/useFetchData';
// import { Link } from 'react-router-dom';
import {Container} from "../../utils/Components";

const Categories = () => {
  const [data, isLoading] = useFetchData("products/categories");
  if(isLoading){
    return <p>isloading....</p>  
  }
  return (
    <section className='product__wrapper'>
      <Container>
        <h2 className='product__title'>There are all categories.</h2>
        <div className="product__list-wrapper">
          {!isLoading && data.length > 0 ?
            data.map(({slug, name, url}) => 
              <a href={`category/${name}`} className='product__item' >
                <div className='product__item-wrapper'>
                  <img src={url} alt="" />
                  <h3>{slug}</h3>
                  <p>{name}</p>
                </div>
              </a>  
            ): <p>Loading...</p>
          }
        </div>
      </Container>
    </section>
  )
}

export default Categories