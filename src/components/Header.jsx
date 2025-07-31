import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1>🛍 LojaTop</h1>
      <nav>
        <Link to="/">Início</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/carrinho">Carrinho</Link>
      </nav>
    </header>
  );
}

export default Header;