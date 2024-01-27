import "./produto-cart.css";
import foto from "../../assets/hamburguer.png";

export default function ProdutoCart(props) {
  return (
    <li className="produto-cart-box">
      <div>
        <img src={props.foto} alt="" />
      </div>
      <div className="produto-cart-info">
        <h2>{props.nome}</h2>
        <p aria-label="preço da unidade">{new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(props.preco)}</p>
        <div className="produto-cart-quantidade">
          <div className="produto-cart-operador">
            <button>-</button>
            <span>01</span>
            <button>+</button>
          </div>
          <p aria-label="subtotal">{new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(props.preco)}</p>
        </div>
      </div>
    </li>
  );
}
