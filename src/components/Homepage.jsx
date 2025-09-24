import React from "react";
import Skincare from "../../pages/api/Skincare";
import Books from "../../pages/api/Books";
import Products from "../../pages/api/Products";
import Mainpage from "./Mainpage"

const Homepage = ({ setCartItems }) => {
  return (
    <div>
      <Mainpage/>
      <Products setCartItems={setCartItems} />
      <Skincare setCartItems={setCartItems} />
      <Books setCartItems={setCartItems} />
    </div>
  );
};

export default Homepage;
