import "./navbar.css";
import logo from "../../assets/logo.png";
import bag from "../../assets/bag.png";
import Cart from "../cart/cart.jsx";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  function openSidebar() {
    const event = new CustomEvent("openSidebar");
    window.dispatchEvent(event);
  }

  return (
    <>
      <nav className="navbar-container">
        <div className="container container-elemento">
          <Link to="/" className="logotipo" >
            <img src={logo} alt="Logotipo da Empresa" />
          </Link>
          {props.showMenu ? (
            <div className="menu">
              <Link to="/historico" title="Veja o Histórico da Empresa">
                Histórico
              </Link>
              <button
                onClick={openSidebar}
                className="btn btn-red"
                title="Acesse a Sacola de Compras"
              >
                <img src={bag} className="icon" alt="Ícone Sacola de Compras" />
                Sacola
              </button>
            </div>
          ) : null}
        </div>
      </nav>

      <Cart />
    </>
  );
}
