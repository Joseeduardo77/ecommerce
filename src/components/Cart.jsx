import React from "react";

function Cart({ cartItems, removeFromCart, closeCart }) {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-overlay">
      <div className="cart">
        <button className="close-cart" onClick={closeCart}>X</button>
        <h2>Seu carrinho</h2>
        {cartItems.length === 0 ? (
          <p>O carrinho está vazio</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - R$ {item.price.toFixed(2)}
                <button onClick={() => removeFromCart(index)}>Remover</button>
              </li>
            ))}
          </ul>
        )}
        <h3>Total: R$ {total.toFixed(2)}</h3>
        <button className="btn-finalizar" disabled={cartItems.length === 0}>
          Finalizar compra
        </button>
      </div>
    </div>
  );
}

export default Cart;