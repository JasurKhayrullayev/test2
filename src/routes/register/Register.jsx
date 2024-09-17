import React, { useState } from "react";
import "./Register.scss";
import signIn from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { instance } from "../../api/instance";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: "",
    password: "",
    email: "",
    avatar: "https://api.lorem.space/image/face?w=640&h=480&r=867",
  });
  const createUser = (e) => {
    e.preventDefault();
    instance
      .post("/users/add", userData)
      .then((response) => {
        if (response.data.email) {
          dispatch({ email: response.data.email, type: "CREATE_USER" });
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div>
        <header className="register__header">
          <a href={"/"}>
            <img width={40} height={40} src={signIn} alt="" />
          </a>
        </header>
        <div className="register__already">
          <p>Already a member?</p>
          <Link className="register__already-link" to={"/signIn"}>
            Sign in
          </Link>
        </div>
        <div className="register__container">
          <h2 className="register__create">Create an account</h2>
          <div className="register__create-wrapper">
            <form
              className="register__createUser-wrapper"
              onSubmit={createUser}
            >
              <div className="register__createUser-box">
                <input
                  className="register__createUser-name"
                  type="text"
                  placeholder="First name"
                  onChange={(e) => {
                    setUserData({ ...userData, name: e.target.value });
                  }}
                />
                <input
                  className="register__createUser-name"
                  type="text"
                  placeholder="Last name"
                  onChange={(e) => {
                    setUserData({ ...userData, name: e.target.value });
                  }}
                />
              </div>
              <input
                className="register__createUser-email"
                type="email"
                onChange={(e) => {
                  setUserData({ ...userData, email: e.target.value });
                }}
                required
                placeholder="Email"
              />
              <input
                className="register__createUser-email"
                type="password"
                onChange={(e) => {
                  setUserData({ ...userData, password: e.target.value });
                }}
                required
                placeholder="Password"
                minLength={8}
              />
              <p className="register__createUser-par">
                By{" "}
                <span className="register__createUser-span">
                  Creating an account
                </span>
                , you agree to our{" "}
                <span className="register__createUser-line">
                  User Agreement
                </span>{" "}
                and acknowledge reading our{" "}
                <span className="register__createUser-line">
                  User Privacy Notice .
                </span>
              </p>
              <button className="register__createUser-btn" type="submit">
                Create account
              </button>
            </form>
            <div className="register__googlelink-wrapper">
              <span className="register__googlelink-span">
                <Link
                  className="register__googlelink"
                  to={
                    "https://accounts.google.com/v3/signin/identifier?dsh=S-1157271442%3A1677654654829000&continue=https%3A%2F%2Fwww.google.com%3Fhl%3Dru&ec=GAlA8wE&hl=ru&flowName=GlifWebSignIn&flowEntry=AddSession"
                  }
                >
                  <FcGoogle /> Continue with Google
                </Link>
              </span>
              or
              <span className="register__googlelink-span"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
