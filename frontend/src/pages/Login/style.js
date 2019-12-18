import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;

  section {
    height: 70%;
    width: 40%;
    margin: 100px auto 50px auto;
    background: white;
    text-align: center;
    align-content: center;
    align-items: center;
  }
  h1 {
    padding-top: 20px;
    font-size: 32pt;
    color: black;
  }
  form {
    color: white;
    display: inline-block;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  input,
  button {
    width: 100%;
  }
  input, button {
    height: 15%;
    width: 80%;
    border: 0;
    outline: 0;
    font-family: 'Times New Roman';
    font-size: 18px;
  }
  input {
    background: #dfe6e9;
    color: #000000;
    padding: 0 13px;
    margin-top: 15px;
  }
  button {
    width: 30%;
    margin-top: 7%;
    font-weight: bold;
    font-family: 'Times New Roman';
    background: #2c3e50;
    color: #ffffff;
    font-size: 20px;
  }
  a {
    text-decoration: none;
  }
`;
export const ContainerLinks = styled.div`
  margin: 20px auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;
  max-width: 300px;
  a {
    color: black;
    text-decoration: none;
  }
`;
