import Navbar from "../../components/navbar/navbar.jsx";
import ProdutoVitrine from "../../components/produto-vetrine/produto-vetrine.jsx";
import { produtos } from "../../dados.js";
import "./home.css";
export default function Home() {
  return (
    <header>
      <Navbar showMenu={true} />
      <div className="container header-content">
        <h1>Nosso Cardápio</h1>
        <p>
          Clique em adicionar para colocar os produtos na sacola de compras. Se
          prederir, você pode pedir pelo WhatsApp: (00) 00000-0000
        </p>
      </div>

      <section className="container" aria-label="Lista de Produtos Disponíveis">
        <ul className="product-list">
          {produtos.map((produto) => {
            return (
              <ProdutoVitrine
                key={produto.id}
                id={produto.id}
                nome={produto.nome}
                descricao={produto.descricao}
                preco={produto.preco}
                foto={produto.foto}
              />
            );
          })}
        </ul>
      </section>
    </header>
  );
}
