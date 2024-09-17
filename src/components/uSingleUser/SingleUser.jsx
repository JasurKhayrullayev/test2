import { useParams, useNavigate } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import { Container } from "../../utils/Components";
import { instance } from "../../api/instance";
import "./SingleUsers.scss";
import React, { useState, useEffect } from "react";

function SingleUser() {
  const { id } = useParams();
  const [data, isLoading] = useFetchData(`users/${id}`);
  const [newTitle, setNewTitle] = useState(data?.title || "");
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setNewTitle(data.title);
    }
  }, [data]);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this User?")) {
      instance
        .delete(`/users/${id}`)
        .then(() => {
          alert("User deleted successfully!");
          navigate("/users");
        })
        .catch((err) => {
          console.error("Error deleting User:", err);
          alert("An error occurred while deleting the User.");
        });
    }
  };

  const handleUpdate = () => {
    if (window.confirm("Are you sure you want to update the User title?")) {
      instance
        .put(`/users/${id}`, { title: newTitle })
        .then((response) => {
          alert("User updated successfully!");
          setNewTitle(newTitle);
          navigate("/users");
        })
        .catch((err) => {
          console.error("Error updating User:", err);
          alert("An error occurred while updating the User.");
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
          <div className="singleUsers">
            <img width={581} height={608} src={data?.images} alt="" />
            <p className="singleUser__about-title">
              Title:{newTitle || data?.title}
            </p>
            <p className="singleUser__desc-title">
              Description:{data?.description}
            </p>
            <p className="singleUser__cat-title">
              Category:{data?.category}
            </p>
            <p className="singleUser__col-title">Rating:{data?.rating}</p>
            <p className="singleUser__col-title">
              Percentage of discount:{data?.discountPercentage}
            </p>
            <p className="singleUser__price-title">Price:${data?.price}</p>
            <h3 className="singleUser__smilar-title">Brand:{data?.brand}</h3>
            <p className="smilar__feed">Sku:{data?.sku}</p>
          </div>
          <div className="singleUser__button">
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

export default SingleUser;
