import React from "react";

function Header({ cartCount, toggleCart }) {
  return (
    <header className="header">
      <div className="container header-content">
        <h1 className="logo">🛍 LojaTop</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/produtos">Produtos</a></li>
          </ul>
        </nav>
        <button className="cart-btn" onClick={toggleCart}>
          🛒 Carrinho ({cartCount})
        </button>
      </div>
    </header>
  );
}

export default Header;