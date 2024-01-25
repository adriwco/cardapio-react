import "./produto-cart.css";
import foto from "../../assets/hamburguer.png";

export default function ProdutoCart() {
  return (
    <li className="produto-cart-box">
      <div>
        <img src={foto} alt="foto" />
      </div>
      <div className="produto-cart-info">
        <h2>Spicy Burguer</h2>
        <p>Preço: R$ 15,00</p>
        <div className="produto-cart-quantidade">
          <div className="produto-cart-operador">
            <button>-</button>
            <span>01</span>
            <button>+</button>
          </div>
          <p aria-label="subtotal">R$ 30,00</p>
        </div>
      </div>
    </li>
  );
}
