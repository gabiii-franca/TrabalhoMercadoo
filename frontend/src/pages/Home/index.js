import React from "react";
import { Container } from "./style.js";
import { Link } from "react-router-dom";
import car from "../../assets/car.png";

export default function Menu({ history }) {
  async function handleSubmit(event) {
    event.preventDefault();
    localStorage.removeItem("@CESTA/token");
    history.push("/");
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
                <li><button>Sair do Sistema</button></li>
              </ul>
            </div>
          </form>
        </nav>
      </div>
      <img src={car} height="500px" widht="600px" />
    </Container>
  );
}
