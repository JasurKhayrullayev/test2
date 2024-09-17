import "./Users.scss"
import useFetchData from '../../hooks/useFetchData';
import { Link } from 'react-router-dom';
import {Container} from "../../utils/Components";

const Users = () => {
  const [data, isLoading] = useFetchData("users");
  if(isLoading){
    return <p>isloading....</p>  
  }
  const users = Array.isArray(data.users) ? data.users : [];
  return (
    <section className='user__wrapper'>
      <Container>
        <span className="user__add">
            <a href="users/add">ADD NEW USER</a>
        </span>
        <h2 className='user__title'>There are all users.</h2>
        <div className="user__list-wrapper">
          {!isLoading && users.length > 0 ?
            users.map(({id,firstName,lastName,age,gender,email,phone,birthDate,image,country,university,}) => 
              <Link to={`/${id}`} className='user__item' key={id}>
                <div className='user__item-wrapper'>
                  <img src={image} alt="" />
                  <h3>{firstName}</h3>
                  <p>{lastName}</p>
                  <p>{age}</p>
                  <p>{gender}</p>
                  <p>{email}</p>
                  <p>{phone}</p>
                  <p>{birthDate}</p>
                  <p>{country}</p>
                  <p>{university}</p>
                </div>
              </Link>  
            ): <p>Loading...</p>
          }
        </div>
        <span className="user__cat-link">
            <a href="users/categories">Categories</a>
        </span>
      </Container>
    </section>
  )
}

export default Users