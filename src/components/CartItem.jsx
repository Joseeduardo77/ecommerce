import "./CartItem.css";

function CartItem({ item, removeFromCart }) {
  return (
    <div className="cart-item">
      <img src={item.imagem} alt={item.nome} />
      <div className="cart-item-info">
        <h3>{item.nome}</h3>
        <p>R$ {item.preco}</p>
      </div>
      <button className="remove-button" onClick={() => removeFromCart(item.id)}>
        Remover
      </button>
    </div>
  );
}

export default CartItem;