import "./historico.css";
import Navbar from "../../components/navbar/navbar";

export default function Historico() {

  const pedidos = [
    {id_pedido: 51214, dt: '14/01/2024', total: 150.00},
    {id_pedido: 76458, dt: '14/01/2024', total: 350.00},
    {id_pedido: 24367, dt: '14/01/2024', total: 55.00},
    {id_pedido: 38572, dt: '14/01/2024', total: 12.00},
    {id_pedido: 89552, dt: '14/01/2024', total: 70.00},
    {id_pedido: 34566, dt: '14/01/2024', total: 45.00},
  ]

  return (
    <>
      <header>
        <Navbar showMenu={true} />
      </header>
      <main>
        <div class="container header-content">
          <h1>Histórico de Pedidos</h1>
          <ul class="lista-historico">
            <li>
              <div
                className="lista-info"
                role="listitem"
                aria-labelledby="pedido-1"
              >
                <h2 id="pedido-1">Pedido: 51214</h2>
                <div className="lista-info-p">
                  <p aria-label="Data do pedido">02/12/2023</p>
                  <p aria-label="Valor do pedido">R$ 18,90</p>
                </div>
              </div>
            </li>
            <li>
              <div
                className="lista-info"
                role="listitem"
                aria-labelledby="pedido-2"
              >
                <h2 id="pedido-2">Pedido: 77374</h2>
                <div className="lista-info-p">
                  <p aria-label="Data do pedido">02/12/2023</p>
                  <p aria-label="Valor do pedido">R$ 20,90</p>
                </div>
              </div>
            </li>
            <li>
              <div
                className="lista-info"
                role="listitem"
                aria-labelledby="pedido-3"
              >
                <h2 id="pedido-3">Pedido: 97364</h2>
                <div className="lista-info-p">
                  <p aria-label="Data do pedido">02/12/2023</p>
                  <p aria-label="Valor do pedido">R$ 120,90</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
