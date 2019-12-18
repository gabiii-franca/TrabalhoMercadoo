import React, { useState } from "react";
import api from "../../services/api";
import { Container } from "./style.js";
import { Link } from "react-router-dom";
export default function Cadastro({ history }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await api.post("/usuario", {
        nome,
        email,
        password
      });
      history.push("/Home");
      alert("Cadastrado com sucesso");
    } catch (err) {
      alert("O e-mail já existe");
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
        <section>
          <h3>Cadastro de Usuário</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" required placeholder="Nome" id="nome" onChange={event => setNome(event.target.value)} />
            <input type="email" required placeholder="Email" id="email" onChange={event => setEmail(event.target.value)} />
            <input type="password" required placeholder="Senha" id="password" onChange={event => setPassword(event.target.value)} />
            <div><button><p>Enviar</p></button></div>
          </form>
        </section>
      </div>
    </Container>
  );
}
