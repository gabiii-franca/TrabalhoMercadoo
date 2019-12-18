import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;   
  padding: 30px;
  th{
    background: #2c3e50;
    color: white;
    height: 50px;
    width: 10%;
    font-size: 20px;
  }
  .tit{
    background: #2c3e50;
    text-align: center;
    color: white;
    height: 40px;
    padding-top: 10px;
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
`;

export const Relatorios = styled.section`
  margin: 70px auto 50px auto;
  margin-top: 50px;
  height: 500px;
  width: 80%;
  flex-direction: row;
  padding: 0 30px;
  color: Black;
`;

export const Produto = styled.tr`
  td {
    background: #ecf0f1;
    color: Black;
    text-align: center;
    height: 50px;
    font-size: 18px;
  }
  
`;
