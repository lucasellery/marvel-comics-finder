import React from 'react';

export default class Quadrinho {
    constructor() {
        this.hqs = [];
    }

}

class Hq {
    constructor(titulo, heroi, escritor, desenhista, dataPublicacao, resenha) {
        this.titulo = titulo;
        this.heroi = heroi;
        this.escritor = escritor;
        this.desenhista = desenhista;
        this.dataPublicacao = dataPublicacao;
        this.resenha = resenha;
    }
}