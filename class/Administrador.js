const Usuario = require("./Usuario")

class Administrador extends Usuario {
    constructor(nome, idade) {
        super(nome, idade)
        this.produtos = []
    }

    acessoPainel() {
        return "Acesso ao painel administrativo."
    }

    adicionarProduto(produto) {
        this.produtos.push(produto)
    }

    removerProduto(produto) {
        this.produtos.splice(this.produtos.indexOf(produto), 1)
    }
}

module.exports = Administrador