import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../Header";
import Homepage from "../Homepage";
import Footer from "../Footer";
import Skincarepage from "../../../pages/api/Skincarepage";
import Devicespage from "../../../pages/api/Devicespage";
import Bookspage from "../../../pages/api/Bookspage";

const Mainrouter = ({ cartItems, setCartItems, setIsCartOpen }) => {
  return (
    <Router>
      <div className="fixed w-full z-50 top-0 left-0">
        {/* ✅ Pass cart count and setIsCartOpen to Header */}
        <Header cartCount={cartItems.length} setIsCartOpen={setIsCartOpen} />
      </div>
      <Routes>
        <Route path="/" element={<Homepage setCartItems={setCartItems} />} />
        <Route path="/homepage" element={<Homepage setCartItems={setCartItems} />} />
        <Route path="/skincare" element={<Skincarepage setCartItems={setCartItems} />} />
        <Route path="/devices" element={<Devicespage setCartItems={setCartItems} />} />
        <Route path="/books" element={<Bookspage setCartItems={setCartItems} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Mainrouter;
