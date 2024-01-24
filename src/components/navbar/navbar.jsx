import "./navbar.css";
import logo from "../../assets/logo.png";
import bag from "../../assets/bag.png";

export default function Navbar() {
  return (
      <nav className="navbar-container">
        <div className="container container-elemento">
          <img src={logo} className="logotipo" alt="Logotipo da Empresa" />
          <div className="menu">
            <a href="#" title="Veja o Histórico da Empresa">
              Histórico
            </a>
            <button className="btn btn-red" title="Acesse a Sacola de Compras">
              <img src={bag} className="icon" alt="Ícone Sacola de Compras" />
              Sacola
            </button>
          </div>
        </div>
      </nav>
  );
}
