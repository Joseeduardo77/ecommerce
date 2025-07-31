import { useState } from "react";
import ProductCard from "../components/ProductCard";
import "./Produtos.css";

const produtos = [
  { id: 1, nome: "Camiseta", preco: 79.9, imagem: "https://picsum.photos/200?random=1" },
  { id: 2, nome: "Tênis", preco: 299.9, imagem: "https://picsum.photos/200?random=2" },
  { id: 3, nome: "Mochila", preco: 199.9, imagem: "https://picsum.photos/200?random=3" },
];

function Produtos() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = (produto) => {
    const newCart = [...cart, produto];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <section className="produtos">
      <h2>Produtos disponíveis</h2>
      <div className="grid">
        {produtos.map((p) => (
          <ProductCard key={p.id} produto={p} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
}

export default Produtos;