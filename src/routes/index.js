import { Routes, Route } from "react-router-dom";
import SignIn from "./login/SignIn"
import Register from "./register/Register"
import Header from "../components/header/Header";
import Main from "../components/main/Main"
import Products from "../components/products/Products"
import SingleProduct from "../components/singleProducts/SingleProducts";
import Search from "../components/search/Search";
import Category from "../components/category/Category"
import SingleCategory from "../components/singleCategory/SingleCategory"
import AddProduct from "../components/addProduct/AddProduct";
import Users from "../components/users/Users";
import SingleUser from "../components/uSingleUser/SingleUser";

const AllRoutes = () => {
  return (
    <>
      <Header/>
      <Search/> 
      <Main/>
      <Routes>
            <Route path="signIn" element={<SignIn />} />
            <Route path="register" element={<Register />} />
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<SingleProduct/>}/>
        <Route path="/products/categories" element={<Category/>}/>
        <Route path="/:name" element={<SingleCategory/>}/>
        <Route path="/products/add" element={<AddProduct/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/:id" element={<SingleUser/>}/>
      </Routes>
    </>
  );
};

export default AllRoutes;
