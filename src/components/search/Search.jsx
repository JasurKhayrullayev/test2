import React, { useRef, useState } from "react";
import "./Search.scss";
import { Container } from "../../utils/Components";
import { FiSearch } from "react-icons/fi";
import { MainLink } from "../../utils/Components";
import { Link, useLocation } from "react-router-dom";
import { instance } from "../../api/instance";
import signIn from "../../assets/logo.svg";

function Search() {
  const location = useLocation();
  const [search, setSearch] = useState("");
  const [data, setData] = useState("");
  const inputSearch = useRef();

  const Fn = (e) => {
    setSearch(e.target.value.trim().length);
    if (e.target.value.trim().length > 2) {
      instance
        .get(`/products/?title=${e.target.value}&offset=0&limit=10`)
        .then((response) => setData(response.data))
        .catch((err) => console.log(err));
    }
  };

  const products = Array.isArray(data.products) ? data.products : [];

  return (
    <>
      {!(
        location.pathname.includes("signIn") ||
        location.pathname.includes("register") ||
        location.pathname.includes("products/add")
      ) && (
        <Container>
          <div className="search__wrapper">
            <a href={"/"}>
              <img width={40} height={40} src={signIn} alt="" />
            </a>
            <form className="search__form">
              <div className="search__input-wrapper">
                <span className="search__input-ico">
                  <FiSearch />
                </span>
                <input
                  onChange={Fn}
                  className="search__input"
                  type="text"
                  placeholder={"Search for anything"}
                  ref={inputSearch}
                />
              </div>
              {search !== "" && (
                <div className="search-datas">
                  {products.length > 0 &&
                    products.map((el) => {
                      return (
                        <Link
                          key={el.id}
                          onClick={() => {
                            setSearch("");
                            inputSearch.value = "";
                          }}
                          to={`/${el.id}`}
                          className="search-link"
                        >
                          {el.title}
                        </Link>
                      );
                    })}
                </div>
              )}
              <button className="search__btn" type="submit">
                Search
              </button>
            </form>
            <MainLink title={"Advanced"} />
          </div>
        </Container>
      )}
    </>
  );
}

export default Search;
