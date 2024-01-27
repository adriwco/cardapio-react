import "./produto-cart.css";
import { CartContext } from "../../contexts/cart-context";
import { useContext } from "react";

export default function ProdutoCart(props) {
  const { AddItemCard, RemoveItemCard } = useContext(CartContext);

  function AddItem() {
    const item = {
      id: props.id,
      nome: props.nome,
      preco: props.preco,
      qtd: 1,
      foto: props.foto,
    };
    AddItemCard(item);
  }

  function RemoveItem() {
    RemoveItemCard(props.id);
  }

  return (
    <li className="produto-cart-box">
      <div>
        <img src={props.foto} alt="" />
      </div>
      <div className="produto-cart-info">
        <h2>{props.nome}</h2>
        <p aria-label="preço da unidade">
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(props.preco)}
        </p>
        <div className="produto-cart-quantidade">
          <div className="produto-cart-operador">
            <button onClick={RemoveItem}>-</button>
            <span>{props.qtd}</span>
            <button onClick={AddItem}>+</button>
          </div>
          <p aria-label="subtotal">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(props.preco * props.qtd)}
          </p>
        </div>
      </div>
    </li>
  );
}
