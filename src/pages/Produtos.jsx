import React from "react";
import ProductCard from "../components/ProductCard";

function Produtos({ products, addToCart }) {
  return (
    <section className="page">
      <div className="container">
        <h2>Produtos disponíveis</h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Produtos;