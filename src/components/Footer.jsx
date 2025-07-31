import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} LojaTop - Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;