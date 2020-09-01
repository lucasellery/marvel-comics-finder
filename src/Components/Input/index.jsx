import React, { Component } from "react";
import styled from "styled-components";
import "./styles.css";

const Label = styled.p`
  font-size: 16px;
  margin-left: 40px;
  margin-bottom: 5px;
  padding-top: 0px;
`;

const InputHQ = styled.input`
  margin-left: 40px;
  margin-top: 0px;
  width: 20%;
  padding: 10px;
  border: 1px solid #FF0000;
  border-radius: 4px;
`;

class Input extends Component {
  render() {
    return (
      <div className="input-box">
        <Label>Busque pelo seu HQ favorito:</Label>
        <InputHQ placeholder="Digite o nome do super-heroi" type="text"/>
      </div>
    );
  }
}

export default Input;
