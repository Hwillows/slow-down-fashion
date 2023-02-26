import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import Form from "./components/Form";
import Sustainableclothes from "./components/Sustainableclothes";
import Wardrobe from "./components/Wardrobe";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Jackets from "./components/wardrobe/Jackets";
import Tops from "./components/wardrobe/Tops";
import Bottoms from "./components/wardrobe/Bottoms";
import AllInOnes from "./components/wardrobe/AllInOnes";
import Shoes from "./components/wardrobe/Shoes";
import ReHome from "./components/ReHome";
import Outfit from "./components/ReusableComponents/Outfit";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/form" element={<Form />} />
      <Route path="/sustainableclothes" element={<Sustainableclothes />} />
      <Route path="/wardrobe" element={<Wardrobe />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/jackets" element={<Jackets />} />
      <Route path="/tops" element={<Tops />} />
      <Route path="/bottoms" element={<Bottoms />} />
      <Route path="/allinones" element={<AllInOnes />} />
      <Route path="/shoes" element={<Shoes />} />
      <Route path="/rehome" element={<ReHome />} />
      <Route path="/outfit" element={<Outfit />} />
    </Routes>
  </BrowserRouter>
);
