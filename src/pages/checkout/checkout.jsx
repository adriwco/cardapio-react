import Navbar from "../../components/navbar/navbar.jsx";
import React, { useState } from "react";

import "./checkout.css";
export default function Checkout() {
  const [estadoSelecionado, setEstadoSelecionado] = useState("");
  const estadosBrasil = [
    { nome: "Acre", abreviacao: "AC" },
    { nome: "Alagoas", abreviacao: "AL" },
    { nome: "Amapá", abreviacao: "AP" },
    { nome: "Amazonas", abreviacao: "AM" },
    { nome: "Bahia", abreviacao: "BA" },
    { nome: "Ceará", abreviacao: "CE" },
    { nome: "Distrito Federal", abreviacao: "DF" },
    { nome: "Espírito Santo", abreviacao: "ES" },
    { nome: "Goiás", abreviacao: "GO" },
    { nome: "Maranhão", abreviacao: "MA" },
    { nome: "Mato Grosso", abreviacao: "MT" },
    { nome: "Mato Grosso do Sul", abreviacao: "MS" },
    { nome: "Minas Gerais", abreviacao: "MG" },
    { nome: "Pará", abreviacao: "PA" },
    { nome: "Paraíba", abreviacao: "PB" },
    { nome: "Paraná", abreviacao: "PR" },
    { nome: "Pernambuco", abreviacao: "PE" },
    { nome: "Piauí", abreviacao: "PI" },
    { nome: "Rio de Janeiro", abreviacao: "RJ" },
    { nome: "Rio Grande do Norte", abreviacao: "RN" },
    { nome: "Rio Grande do Sul", abreviacao: "RS" },
    { nome: "Rondônia", abreviacao: "RO" },
    { nome: "Roraima", abreviacao: "RR" },
    { nome: "Santa Catarina", abreviacao: "SC" },
    { nome: "São Paulo", abreviacao: "SP" },
    { nome: "Sergipe", abreviacao: "SE" },
    { nome: "Tocantins", abreviacao: "TO" },
  ];

  const handleChange = (event) => {
    setEstadoSelecionado(event.target.value);
  };

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="container header-content">
        <h1>Finalizar Pedido</h1>

        <form action="/submit" method="post" className="finalizar-section">
          <section>
            <h2>Dados Pessoais</h2>
            <div className="finalizar-label-input">
              <label htmlFor="nome">Nome Completo</label>
              <input
                type="text"
                name="nome"
                id="nome"
                placeholder="Evite Abreviações..."
              />
            </div>
            <div className="finalizar-label-input">
              <label htmlFor="eMail">E-mail</label>
              <input
                type="email"
                name="eMail"
                id="eMail"
                placeholder="usuario@teste.com"
              />
            </div>
            <div className="finalizar-label-input">
              <label htmlFor="telefone">Telefone Contato</label>
              <input
                type="tel"
                name="telefone"
                id="telefone"
                placeholder="(00) 00000-0000"
              />
            </div>
          </section>
          <section>
            <h2>Endereço de Entrega</h2>
            <div className="finalizar-label-input">
              <label htmlFor="cep">CEP</label>
              <input
                type="number"
                name="cep"
                id="cep"
                placeholder="00000-000"
              />
            </div>
            <div className="finalizar-label-input">
              <label htmlFor="endereco">Endereço</label>
              <input
                type="text"
                name="endereco"
                id="endereco"
                placeholder="Logradouro, nº..."
              />
            </div>
            <div className="label-input-especial">
              <div className="finalizar-label-input">
                <label htmlFor="complemento">Complemento</label>
                <input
                  type="text"
                  name="complemento"
                  id="complemento"
                  placeholder="Apto 000..."
                />
              </div>
              <div className="finalizar-label-input">
                <label htmlFor="bairro">Bairro</label>
                <input
                  type="text"
                  name="bairro"
                  id="bairro"
                  placeholder="Meireles..."
                />
              </div>
              <div className="finalizar-label-input">
                <label htmlFor="cidade">Cidade</label>
                <input
                  type="text"
                  name="cidade"
                  id="cidade"
                  placeholder="Fortaleza..."
                />
              </div>
              <div className="finalizar-label-input">
                <label htmlFor="estadoSelect">UF</label>
                <select
                  id="estadoSelect"
                  name="estadoSelect"
                  value={estadoSelecionado}
                  onChange={handleChange}
                >
                  <option value="">Selecione um Estado</option>
                  {estadosBrasil.map((estado, index) => (
                    <option key={index} value={estado.abreviacao}>
                      {estado.nome}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </section>
          <section>
            <h2 className="checkout-finalizar-titulo">Valores</h2>
            <div className="checkout-finalizar">
              <span>Total</span>
              <strong>R$ 50,00</strong>
              <button>Finalizar Pedido</button>
            </div>
          </section>
        </form>
      </main>

      <section aria-label="Lista de Produtos Disponíveis"></section>
    </>
  );
}
