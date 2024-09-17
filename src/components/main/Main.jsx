import React from "react";
import { Container } from "../../utils/Components";
import "./Main.scss";
import products from "../../assets/products.jfif";
import users from "../../assets/users.png";
import { useLocation } from "react-router-dom";

function Main() {
  const location = useLocation();
  return (
    <>
      {!(
        location.pathname.includes("signIn") ||
        location.pathname.includes("register")||
        location.pathname.includes("products/add")
      ) && (
        <Container>
          <div className="main__wrapper">
            <a href="/products">
              <img width={400} height={200} src={products} alt="" />
            </a>
            <a href="/users">
              <img width={400} height={200} src={users} alt="" />
            </a>
          </div>
        </Container>
      )}
    </>
  );
}

export default Main;
