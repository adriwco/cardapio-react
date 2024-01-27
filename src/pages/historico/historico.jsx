import "./historico.css";
import Navbar from "../../components/navbar/navbar";
import { pedidos } from "../../dados.js";

export default function Historico() {
  return (
    <>
      <header>
        <Navbar showMenu={true} />
      </header>
      <main>
        <div className="container header-content">
          <h1>Histórico de Pedidos</h1>
          <ul className="lista-historico">
            {pedidos.map((pedido, id) => {
              const pedidoId = `pedido-${id + 1}`;
              return (
                <li key={pedidoId}>
                  <div
                    className="lista-info"
                    role="listitem"
                    aria-labelledby={pedidoId}
                  >
                    <h2 id={pedidoId}>Pedido: {pedido.id_pedido}</h2>
                    <div className="lista-info-p">
                      <p aria-label="Data do pedido">{pedido.dt}</p>
                      <p aria-label="Valor do pedido">
                        {new Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(pedido.total)}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
}
