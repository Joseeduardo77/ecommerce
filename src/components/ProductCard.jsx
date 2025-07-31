import "./ProductCard.css";

function ProductCard({ produto, addToCart }) {
  return (
    <div className="product-card">
      <img src={produto.imagem} alt={produto.nome} />
      <h3>{produto.nome}</h3>
      <p>R$ {produto.preco}</p>
      <button onClick={() => addToCart(produto)}>Adicionar ao carrinho</button>
    </div>
  );
}

export default ProductCard;