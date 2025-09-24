import React, { useState, useEffect } from "react";
import Mainrouter from "./components/Router/Mainrouter";
import CartSidebar from "./components/Sidebar";

const App = () => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem("cartItems");
      const parsed = saved ? JSON.parse(saved) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });


  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const removeFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Mainrouter
        cartCount={cartItems.length}
        setCartItems={setCartItems}
        cartItems={cartItems}
        setIsCartOpen={setIsCartOpen}
      />
      <CartSidebar
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        cartItems={cartItems}
        onRemove={removeFromCart}
      />
    </div>
  );
};

export default App;
