import { useState, useEffect } from "react";
import CartItem from "../components/CartItem";
import "./Cart.css";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const total = cart.reduce((sum, item) => sum + item.preco, 0);

  return (
    <section className="cart">
      <h2>Meu Carrinho</h2>
      <div className="cart-items">
        {cart.length === 0 && <p>Seu carrinho está vazio.</p>}
        {cart.map((item) => (
          <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
        ))}
      </div>
      {cart.length > 0 && (
        <div className="cart-total">
          <p>Total: R$ {total.toFixed(2)}</p>
          <button className="checkout-button">Finalizar Compra</button>
        </div>
      )}
    </section>
  );
}

export default Cart;