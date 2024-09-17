import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import { Container } from "../../utils/Components";
import "./SingleCategory.scss";

const SingleCategory = () => {
    const { name } = useParams();
    const [data, isLoading] = useFetchData(`products/category/${name}`);

    if (isLoading) {
      return <p>isloading....</p>;
    }
  
    return (
      <>
        {data && (
          <Container>
            <div className="singleProducts">
              <div className="singleProduct__about">
                <div className="singleProduct__title-wrapper">
                  <p className="singleProduct__about-title">Title:</p>
                  <h3 className="singleProduct__about-titledata">
                    {data?.title}
                  </h3>
                </div>
                <div className="singleProduct__cat-wrapper">
                  <p className="singleProduct__cat-title">Category:</p>
                  <p className="singleProduct__cat-titledata">
                    {data?.category}
                  </p>
                </div>
              </div>
            </div>
          </Container>
        )}
      </>
    );
  }
  
  export default SingleCategory