import "./produto-vetrine.css";
import foto from '../../assets/hamburguer.png';
import bag from '../../assets/bag-black.png';
export default function ProdutoVitrine() {
  return (
    <li className="produto-vetrine-box">
      <img src={foto} alt="hamburgue"/>
      <div className="produto-vetrine-info">
        <h2>Spicy Burguer</h2>
        <p>Hamburguer de 250g, queijo, tomate, alface e cebola.</p>
        <span aria-label="Preço do Produto">R$18,90</span>
        <button className="btn-cart">
          <img src={bag} className="icon" alt="" />
          <div>Comprar</div></button>
      </div>
    </li>
  );
}
