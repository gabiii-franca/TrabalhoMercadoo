import styled from "styled-components";
export const Container = styled.div`
  height: 100%;
  width: 100%;
  section {
    height: 25%;
    width: 40%;
    margin: 70px auto 50px auto;
    background: #ffffff;
    box-shadow: 3px 3px 10px 2px rgba(0, 0, 0, 0.5);
    text-align: center;
    align-content: center;
    align-items: center;
  }
  h3 {
    font-size: 25pt;
    color: #000000;
    padding-top: 20px;
  }
  h1{
    color: White;
  }
  body {
    margin: 0px;
  }
  button {
    font-size: 18px;
    margin: 10px;
    padding: 10px 20px 10px 20px;
    color: black;
    margin-bottom: 20px;
    margin-top: 40px;
    width: 50%;
    border-radius: 0px;
    border: 0px;
    text-align: center;
    cursor: pointer;
  }
  form {
    color: white;
    display: inline-block;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  input,
  button {
    width: 100%;
  }
  input{
    height: 40px;
    width: 80%;
    border: 0;
    outline: 0;
    font-family: 'Times New Roman';
    background: #dfe6e9;
    color: #000000;
    padding: 0 10px;
    margin-top: 15px;
  }
  a {
    text-decoration: none;
  }
  @media (max-width: 500px) {
    section {
      width: 100%;
      height: 100vh;
      color: white;
      margin: 0;
      border-radius: 0;
      padding-bottom: 50px;
    }
  }
  *{
    font-family: 'Times New Roman';
    font-size:22px;
    color: #ffffff;
  }
  .menu{
    width:100%;
    height:50px;
    background:#2c3e50;
  }
  
  .menu ul li{
    display:block;
    color:#fff;
    padding:13px 23px;
    float:left;
  }
  button {
    border: 0;
    width:100%;
    font-weight: bold;
    background: #2c3e50;
    color: #ffffff;
  }
`;
