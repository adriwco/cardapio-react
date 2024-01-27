import { useEffect, useState, useContext } from "react";
import { Dock } from "react-dock";
import ProdutoCart from "../produto-cart/produto-cart.jsx";
import "./cart.css";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart-context.jsx";

export default function Cart() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const {cartItems} = useContext(CartContext)

  useEffect(() => {
    window.addEventListener("openSidebar", function () {
      setShow(true);
    });
    // setCartItems(carrinho)
  }, []);

  function checkout() {
    navigate("/checkout");
  }

  return (
    <Dock
      position="right"
      isVisible={show}
      fluid={false}
      size={420}
      onVisibleChange={(visible) => {
        setShow(visible);
      }}
    >
      <aside className="container lista-pedido">
        <h1>Meu Pedido</h1>

        <section aria-label="Lista de Pedido">
          <ul className="product-list-pedido">
            {
              cartItems.map((item)=>{
                return <ProdutoCart key={item.id} id={item.id}
                nome={item.nome}
                preco={item.preco}
                foto={item.foto}
                qtd={item.qtd}/>
              })
            }
          </ul>
        </section>

        <div className="preco-final">
          <span>Preço Final:</span>
          <span>
            <strong>R$ 150,00</strong>
          </span>
          <button onClick={checkout}>Finalizar Pedido</button>
        </div>
      </aside>
    </Dock>
  );
}
