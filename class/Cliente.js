const Usuario = require("./Usuario")

class Cliente extends Usuario {
    constructor(nome, idade) {
        super(nome, idade)
        this.carrinho = []
    }

    acessoPainel() {
        return "Acesso ao painel de compras."
    }

    adicionarProduto(produto) {
        this.carrinho.push(produto)
    }
}

module.exports = Cliente