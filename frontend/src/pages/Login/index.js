import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { Container, ContainerLinks } from "./style.js";
import car from "../../assets/car.png";

export default function Login({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await api.post("/sessions", {
        email,
        password
      });
      const { token, user: userData } = response.data;
      if (token) {
        localStorage.setItem("@CESTA/token", token, userData);
      }
      history.push("/Home");
    } catch (err) {
      console.log("response", err);
    }
  }
  return (
    <Container>
      <section>
        <h1>Login</h1>
        <img src={car} height="90px" widht="130px" />
        <form onSubmit={handleSubmit}>
          <input type="email" required placeholder="Email" id="email" onChange={event => setEmail(event.target.value)} />
          <input type="password" required placeholder="Senha" id="password" onChange={event => setPassword(event.target.value)} />
          <button><p>Entrar</p></button><br></br>
        </form>
      </section>
    </Container>
  );
}
