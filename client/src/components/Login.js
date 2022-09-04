import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";

function Login() {
  let [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const { data } = await axios("http://localhost:5005/users/login", {
        method: "POST",
        data: credentials,
      });
      setLoggedIn(true);
      localStorage.setItem("token", data);
      navigate("/wardrobe");

      console.log(loggedIn + " is log in status");
    } catch (err) {
      setError(true);
    }
  };

  const handleLogOut = () => {
    setLoggedIn(false);

    localStorage.removeItem("token");
    console.log(loggedIn + " is log in status");
  };

  return (
    <div>
      <Header />
      <div className="container text-center">
        <div className="row row-cols-3 mt-5">
          <div className="col"></div>
          <div className="col">
            <div className="container text-center border rounded bg-white">
              <div className="row row-cols-1">
                {loggedIn ? (
                  <div>
                    <h3>Goodbye</h3>
                    <button
                      className="btn btn-outline-secondary mb-4"
                      onClick={handleLogOut}
                    >
                      Logout
                    </button>
                    <Link to="/wardrobe">
                      {" "}
                      <h4>
                        <i>Return to wardrobe</i>
                      </h4>{" "}
                    </Link>
                  </div>
                ) : (
                  <div>
                    <form onSubmit={handleLogin}>
                      <div className="col">
                        <input
                          type="text"
                          placeholder="Username"
                          className="border rounded mt-5 mb-3 px-2 py-2 bg-secondary text-white"
                          name="username"
                          value={credentials.username}
                          onChange={handleInputChange}
                        ></input>
                      </div>
                      <div className="col">
                        <input
                          placeholder="Password"
                          name="password"
                          type="password"
                          className="border rounded mt-2 mb-4 px-2 py-2 bg-secondary text-white"
                          value={credentials.password}
                          onChange={handleInputChange}
                        ></input>
                      </div>
                      <div className="col">
                        {" "}
                        <button
                          className="btn btn-outline-secondary mb-4"
                          type="submit"
                        >
                          Login
                        </button>{" "}
                      </div>
                    </form>
                    <div className="col">
                      <p className="mb-5">
                        Not got an account?{" "}
                        <Link style={{ textDecoration: "none" }} to="/signup">
                          <i className="text-dark">Sign Up</i>
                        </Link>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
