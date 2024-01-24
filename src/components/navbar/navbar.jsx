import "./navbar.css";
import logo from "../../assets/logo.png";
import bag from "../../assets/bag.png";
import Cart from "../cart/cart.jsx";

export default function Navbar() {
  function openSidebar() {
    const event = new CustomEvent("openSidebar");
    window.dispatchEvent(event);
  }

  return (
    <>
      <nav className="navbar-container">
        <div className="container container-elemento">
          <img src={logo} className="logotipo" alt="Logotipo da Empresa" />
          <div className="menu">
            <a href="#" title="Veja o Histórico da Empresa">
              Histórico
            </a>
            <button
              onClick={openSidebar}
              className="btn btn-red"
              title="Acesse a Sacola de Compras"
            >
              <img src={bag} className="icon" alt="Ícone Sacola de Compras" />
              Sacola
            </button>
          </div>
        </div>
      </nav>

      <Cart />
    </>
  );
}
