import React, { useState, useEffect } from "react";
import { Container, Relatorios, Produto } from "./style";
// import Produto from "../../components/Produto";
import api from "../../services/api";
import { Link } from "react-router-dom";

export default function ConsultarProduto({ history }) {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const populateProduto = async () => {
      const allProduto = await api.get(`/produtos`);
      console.log('todos: ', allProduto)
      setProdutos(allProduto.data);
    };
    populateProduto();
  }, []);
  async function handleSubmit(event) {
    event.preventDefault();
    localStorage.removeItem("@CESTA/token");
    history.push("/Home");
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
                  <h1>Voltar</h1>
                </Link></li>
              </ul>
            </div>
          </form>
        </nav>
      </div>
      <Relatorios>
        <section>
          <div class="tit"><h1>Relatório de Produtos</h1></div>
          <table>
            <thead>
              <tr>
                <th>Nome do Produto</th>
                <th>Código</th>
                <th>Preço</th>
                <th>Descrição</th>
                <th>Estoque</th>
                <th>Fornecedor</th>
              </tr>
            </thead>
            <tbody>
              {produtos && produtos.map(produto => (
                <Produto key={produto._id}>
                  <td>{produto.nome}</td>
                  <td>{produto.cod}</td>
                  <td>{produto.preco}</td>
                  <td>{produto.descricao}</td>
                  <td>{produto.estoque}</td>
                  <td>{produto.fornecedor}</td>
                </Produto>
              ))}
            </tbody>
          </table>
        </section>
      </Relatorios>
    </Container>
  );
}
