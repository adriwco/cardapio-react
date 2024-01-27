import "./produto-vetrine.css";
import bag from "../../assets/bag-black.png";
import { CartContext } from "../../contexts/cart-context";
import { useContext } from "react";
export default function ProdutoVitrine(props) {
  const { AddItemCard } = useContext(CartContext);

  function AddItem() {
    const item = {
      id: props.id,
      nome: props.nome,
      preco: props.preco,
      foto: props.foto,
      qtd: 1,
    };
    AddItemCard(item);
  }

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
        <button
          onClick={AddItem}
          className="btn-cart"
          aria-label="Adicionar ao carrinho"
        >
          <img src={bag} className="icon" alt="" />
          <div>Comprar</div>
        </button>
      </div>
    </li>
  );
}
