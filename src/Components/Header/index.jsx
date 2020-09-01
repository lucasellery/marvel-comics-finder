import React from "react";
import { Titulo, Subtitulo, HeaderBox } from "./styles";

function Header() {
  return (
    <HeaderBox>
      <header>
        <Titulo>Marvel Comics Finder</Titulo>
        <Subtitulo>Encontre seus HQs favoritos</Subtitulo>
      </header>
    </HeaderBox>
  );
}

export default Header;
