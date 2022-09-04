import React, { useState, useEffect } from "react";
import Header from "./Header";

function Sustainableclothes() {
  let [companyName, setCompanyName] = useState("");
  let [price, setPrice] = useState("£");
  let [url, setUrl] = useState("");
  let [comments, setComments] = useState("");
  let [recommendations, setRecommendations] = useState([]);

  const handleCompanyChange = (event) => {
    setCompanyName(event.target.value);
    console.log(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
    console.log(event.target.value);
  };

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
    console.log(event.target.value);
  };

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
    console.log(event.target.value);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log("company name is " + companyName);
    let newCompany = {
      companyName: companyName,
      price: price,
      url: url,
      comments: comments,
    };
    fetch("http://localhost:5005/sustainableClothing", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(newCompany),
    }).then(() => {
      console.log("new item added");
    });
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:5005/sustainableClothing");
      const results = await response.json();
      console.log(results);
      setRecommendations(results);
    }
    fetchData();
  }, []);
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h2 className="mt-4">Sustainable Clothing</h2>
            {recommendations.map((oneRecommendation, index) => {
              return (
                <div key={index}>
                  <div className="container bg-light rounded my-4 py-2 px-3">
                    <h6 className="bg-secondary text-light p-1 rounded">
                      <b>Company Name</b>
                    </h6>
                    <p>{oneRecommendation.companyName}</p>
                    <h6>
                      <b>Price Range</b>
                    </h6>
                    <p>{oneRecommendation.price}</p>
                    <h6>
                      <b>Link</b>
                    </h6>
                    <p>
                      {/* <a href={oneRecommendation.url}> */}
                      {oneRecommendation.url}
                      {/* </a> */}
                    </p>
                    <h6>
                      <b>Comments</b>
                    </h6>
                    <p>{oneRecommendation.comments}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-md-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <h2 className="mt-4">Recommend</h2>
                <input
                  className="form-control mt-4 w-75 border border-secondary"
                  placeholder="Company Name"
                  value={companyName}
                  onChange={(event) => handleCompanyChange(event)}
                ></input>
                <select
                  value={price}
                  onChange={handlePriceChange}
                  className="mt-4 p-2 rounded w-75 text-muted border border-secondary"
                  placeholder="Price"
                >
                  <option value="£">£ Price</option>
                  <option value="£ £">£ £ Price</option>
                  <option value="£ £ £">£ £ £ Price</option>
                </select>
                <input
                  className="form-control mt-4 w-75 border border-secondary"
                  placeholder="URL"
                  value={url}
                  onChange={handleUrlChange}
                ></input>
                <input
                  className="form-control mt-4 w-75 border border-secondary"
                  placeholder="Comments"
                  value={comments}
                  onChange={handleCommentsChange}
                ></input>
                <button className="btn btn-secondary mt-4" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sustainableclothes;
