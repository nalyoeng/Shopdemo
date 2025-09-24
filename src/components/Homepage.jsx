import React from "react";
import Mainpage from "./Mainpage";
import Products from "./API/Products";
import Skincare from "./API/Skincare";
import Books from "./API/Books";

const Homepage = ({ setCartItems }) => {
  return (
    <div>
      <Mainpage />
      <Products setCartItems={setCartItems} />
      <Skincare setCartItems={setCartItems} />
      <Books setCartItems={setCartItems} />
    </div>
  );
};

export default Homepage;
