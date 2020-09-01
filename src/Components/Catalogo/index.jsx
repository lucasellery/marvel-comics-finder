import React, { Component } from "react";
import "./style.css";

class Catalogo extends Component {
  apiQuadrinhos() {
    const timeStamp = "1598978646";
    const apiKey = "f4708d23f3840536d3456740ea5f32f8";
    const md5 = "328f2bd03eabe603b02ae1085b748ba1";

    fetch(
      `https://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&limit=20`
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonParsed) => {
        console.log(jsonParsed);
        const divComic = document.querySelector(".comics");

        jsonParsed.data.results.forEach((element) => {
          const srcImage =
            element.thumbnail.path + "." + element.thumbnail.extension;
          const nameComic = element.name;

          this.createDivComic(srcImage, nameComic, divComic);
        });
      });
  }

  createDivComic(srcImage, nameComic, divToAppend) {
    const divPai = document.createElement("div");
    const divFilho = document.createElement("div");
    const textName = document.createElement("text");
    const img = document.createElement("img");

    textName.textContent = nameComic;
    img.src = srcImage;

    divFilho.appendChild(img);
    divFilho.appendChild(textName);
    divPai.appendChild(divFilho);
    divToAppend.appendChild(divPai);

    divPai.classList.add("name");
  }

  render() {
    return (
      <div>
        <button onClick={this.apiQuadrinhos.bind(this)} className="button-mostrar">
          Mostrar HQs
        </button>
        <div className="comics"></div>
      </div>
    );
  }
}

export default Catalogo;
