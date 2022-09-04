import axios from "axios";
import React, { useState } from "react";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const username = credentials.username;
    const password = credentials.password;
    try {
      await axios("users/register", {
        method: "POST",
        data: credentials,
      });
      const { data } = await axios("/api/users/login", {
        method: "POST",
        data: { username: username, password: password },
      });
      localStorage.setItem("token", data);
      navigate("/wardrobe");
    } catch (err) {
      setError(true);
    }
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
                <form onSubmit={handleSubmit}>
                  <div className="col">
                    <input
                      placeholder="Create Username"
                      className="border rounded mt-5 mb-3 px-2 py-2 bg-secondary text-white"
                      value={credentials.username}
                      name="username"
                      onChange={handleInputChange}
                    ></input>
                  </div>
                  <div className="col">
                    <input
                      placeholder="Create Password"
                      className="border rounded mt-2 mb-4 px-2 py-2 bg-secondary text-white"
                      type="password"
                      name="password"
                      value={credentials.password}
                      onChange={handleInputChange}
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
