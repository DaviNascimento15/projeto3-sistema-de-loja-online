class Pedido {
    constructor(cliente, produtos) {
        this.cliente = cliente
        this.produtos = produtos
    }

    calcularTotal() {
        return this.produtos.reduce((total, produto) => total + produto.preco, 0)
    }
}

module.exports = Pedido