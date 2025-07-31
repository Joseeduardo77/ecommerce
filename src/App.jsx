import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import "./index.css";

function App() {
  const [products] = useState([
    { id: 1, name: "Notebook Gamer", price: 4200, image: "https://picsum.photos/200?1" },
    { id: 2, name: "Smartphone", price: 2200, image: "https://picsum.photos/200?2" },
    { id: 3, name: "Fone Bluetooth", price: 250, image: "https://picsum.photos/200?3" },
    { id: 4, name: "TV 4K", price: 3500, image: "https://picsum.photos/200?4" }
  ]);

  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    const newCart = cartItems.filter((_, i) => i !== index);
    setCartItems(newCart);
  };

  return (
    <Router>
      <Header cartCount={cartItems.length} toggleCart={() => setShowCart(true)} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos products={products} addToCart={addToCart} />} />
        </Routes>
      </main>
      {showCart && (
        <Cart
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          closeCart={() => setShowCart(false)}
        />
      )}
    </Router>
  );
}

export default App;