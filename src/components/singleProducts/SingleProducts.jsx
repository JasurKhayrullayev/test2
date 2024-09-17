import { useParams, useNavigate } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import { Container } from "../../utils/Components";
import { instance } from "../../api/instance";
import "./SingleProducts.scss";
import React, { useState, useEffect } from "react";

function SingleProduct() {
  const { id } = useParams();
  const [data, isLoading] = useFetchData(`products/${id}`);
  const [newTitle, setNewTitle] = useState(data?.title || "");
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setNewTitle(data.title);
    }
  }, [data]);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      instance
        .delete(`/products/${id}`)
        .then(() => {
          alert("Product deleted successfully!");
          navigate("/products");
        })
        .catch((err) => {
          console.error("Error deleting product:", err);
          alert("An error occurred while deleting the product.");
        });
    }
  };

  const handleUpdate = () => {
    if (window.confirm("Are you sure you want to update the product title?")) {
      instance
        .put(`/products/${id}`, { title: newTitle })
        .then((response) => {
          alert("Product updated successfully!");
          setNewTitle(newTitle);
          navigate("/products");
        })
        .catch((err) => {
          console.error("Error updating product:", err);
          alert("An error occurred while updating the product.");
        })
    }
  };
  if (isLoading) {
    return <p>isloading....</p>;
  }

  return (
    <>
      {data && (
        <Container>
          <div className="singleProducts">
            <img width={581} height={608} src={data?.images} alt="" />
            <p className="singleProduct__about-title">
              Title:{newTitle || data?.title}
            </p>
            <p className="singleProduct__desc-title">
              Description:{data?.description}
            </p>
            <p className="singleProduct__cat-title">
              Category:{data?.category}
            </p>
            <p className="singleProduct__col-title">Rating:{data?.rating}</p>
            <p className="singleProduct__col-title">
              Percentage of discount:{data?.discountPercentage}
            </p>
            <p className="singleProduct__price-title">Price:${data?.price}</p>
            <h3 className="singleProduct__smilar-title">Brand:{data?.brand}</h3>
            <p className="smilar__feed">Sku:{data?.sku}</p>
          </div>
          <div className="singleProduct__button">
            <button onClick={handleDelete}>delete</button>
            <div>
              <input
                required
                type="text"
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="New title"
              />
              <button onClick={handleUpdate}>Update Title</button>
            </div>
          </div>
        </Container>
      )}
    </>
  );
}

export default SingleProduct;
