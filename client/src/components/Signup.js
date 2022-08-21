import axios from "axios";
import React, { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

function Signup() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  let handleSetUsername = (event) => {
    setUsername(event.target.value);
  };

  let handleSetPassword = (event) => {
    setPassword(event.target.value);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    let newUser = {
      username: username,
      password: password,
    };
    fetch("http://localhost:5005/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(newUser),
    }).then(() => {
      console.log("new user added");
    });
  };
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   let newUser = {
  //     username: username,
  //     password: password,
  //   };
  //   try {
  //     const { data } = await axios("http://localhost:5005/users/register", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json; charset=utf-8" },
  //       body: JSON.stringify(newUser),
  //     });

  //     localStorage.setItem("token", data);
  //     setLoggedIn(true);
  //     navigate("/login");
  //     console.log(loggedIn + " is log in status");
  //   } catch (err) {
  //     setError(true);
  //   }
  // };
  return (
    <div>
      <Header />
      <div className="container text-center">
        <div className="row row-cols-3 mt-5">
          <div className="col"></div>
          <div className="col">
            <div className="container text-center border rounded bg-white">
              <div className="row row-cols-1">
                <form onSubmit={handleSubmit}>
                  <div className="col">
                    <input
                      placeholder="Create Username"
                      className="border rounded mt-5 mb-3 px-2 py-2 bg-secondary text-white"
                      value={username}
                      onChange={handleSetUsername}
                    ></input>
                  </div>
                  <div className="col">
                    <input
                      placeholder="Create Password"
                      className="border rounded mt-2 mb-4 px-2 py-2 bg-secondary text-white"
                      type="password"
                      value={password}
                      onChange={handleSetPassword}
                    ></input>
                  </div>
                  <div className="col">
                    {" "}
                    <button
                      type="submit"
                      className="btn btn-outline-secondary mb-4"
                    >
                      Signup
                    </button>
                  </div>
                </form>
                <div className="col">
                  <p className="mb-5">
                    Already got an account?{" "}
                    <Link style={{ textDecoration: "none" }} to="/login">
                      <i className="text-dark">Login</i>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
