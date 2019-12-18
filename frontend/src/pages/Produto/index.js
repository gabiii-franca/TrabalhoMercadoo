import React, { useState } from "react";
import api from "../../services/api";
import { Container } from "./style.js";
import { Link } from "react-router-dom";

export default function Cadastro({ history }) {
  const [nome, setNome] = useState("");
  const [cod, setCod] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");
  const [estoque, setEstoque] = useState("");
  const [fornecedor, setFornecedor] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await api.post("/produto", { nome, cod, preco, descricao, estoque, fornecedor });
      history.push("/Home");
      alert("Cadastrado realizado com sucesso!");
    } catch (err) {
      alert("Esse código já foi cadastrado!");
    }
  }
  return (
    <Container>
      <div>
        <nav>
          <form onSubmit={handleSubmit}>
            <div class="menu">
              <ul>
                <li>
                  <Link to="../Cadastro">
                    <div>
                      <h1>Cadastro de Usuário</h1>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="../Produto">
                    <div>
                      <h1>Cadastro de Produto</h1>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="../Relatorio">
                    <div>
                      <h1>Relatório</h1>
                    </div>
                  </Link>
                </li>
                <li><Link to="../Home">
                  Voltar{" "}
                </Link></li>
              </ul>
            </div>
          </form>
        </nav>
      </div>
      <div>
        <div>
          <section>
            <h3>Cadastro de Produto</h3>
            <form onSubmit={handleSubmit}>
              <input type="text" required placeholder="Nome do Produto" id="nome" onChange={event => setNome(event.target.value)} />
              <input type="number" required placeholder="Código" id="cod" onChange={event => setCod(event.target.value)} />
              <input type="text" required placeholder="Preço" id="preco" onChange={event => setPreco(event.target.value)} />
              <input type="text" required placeholder="Descrição" id="descricao" onChange={event => setDescricao(event.target.value)} />
              <input type="text" required placeholder="Quantidade em Estoque" id="estoque" onChange={event => setEstoque(event.target.value)} />
              <input type="text" required placeholder="Fornecedor" id="fornecedor" onChange={event => setFornecedor(event.target.value)} />
              <div><button><p>Cadastrar</p></button></div>
            </form>
          </section>
        </div>
      </div>
    </Container>
  );
}
