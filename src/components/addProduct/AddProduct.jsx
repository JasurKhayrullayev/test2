import "./AddProduct.scss";
import signIn from "../../assets/logo.svg";
import { Container } from "../../utils/Components";
import { instance } from "../../api/instance";
import React, { useState } from "react";

function AddProduct() {
  const [productData, setProductData] = useState({
    title: "",
    description: "",
    url: "https://picsum.photos/200/300",
  });

  const [newProduct, setNewProduct] = useState(null);

  const createProduct = (e) => {
    e.preventDefault();
    instance
      .post("/products/add", productData)
      .then((response) => {
        setNewProduct(response.data);
        alert("Product added successfully!");
      })
      .catch((err) => console.log(err));
  };
  
  return (
    <>
      <Container>
        <a href={"/"}>
          <img width={40} height={40} src={signIn} alt="" />
        </a>
        <form className="addProduct__form" onSubmit={createProduct}>
          <div className="addProduct__wrapepr">
            <input
              required
              type="text"
              placeholder="Title"
              onChange={(e) => {
                setProductData({ ...productData, title: e.target.value });
              }}
            />
            <input
              required
              type="text"
              placeholder="Description"
              onChange={(e) => {
                setProductData({ ...productData, description: e.target.value });
              }}
            />
            <button className="" type="submit">
              Create Product
            </button>
          </div>
        </form>
        <div className="product__card">
          {newProduct ? (
            <div className="newProduct">
              <img src={newProduct.url} alt={newProduct.title} />
              <h3>{newProduct.title}</h3>
              <p>{newProduct.description}</p>
            </div>
          ) : (
            <p>No product added yet.</p>
          )}
        </div>
      </Container>
    </>
  );
}

export default AddProduct;
