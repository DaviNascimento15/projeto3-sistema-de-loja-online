class Produto {
    constructor(nome, preco, estoque) {
        this.nome = nome
        this.preco = preco
        this.estoque = estoque
    }

    toString() {
        return `Produto: {nome: ${this.nome}, preco: ${this.preco}, estoque: ${this.estoque}}`
    }
}

module.exports = Produto