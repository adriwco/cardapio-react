import "./produto-vetrine.css";
import foto from "../../assets/hamburguer.png";
import bag from "../../assets/bag-black.png";
export default function ProdutoVitrine(props) {
  return (
    <li className="produto-vetrine-box" role="contentinfo">
      <img src={props.foto} alt={props.nome} />
      <div className="produto-vetrine-info">
        <h2>{props.nome}</h2>
        <p>{props.descricao}.</p>
        <span aria-label="Preço do Produto">
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(props.preco)}
        </span>
        <button className="btn-cart" aria-label="Adicionar ao carrinho">
          <img src={bag} className="icon" alt="" />
          <div>Comprar</div>
        </button>
      </div>
    </li>
  );
}
