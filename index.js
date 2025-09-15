const Administrador = require("./class/Administrador")
const Cliente = require("./class/Cliente")
const Pedido = require("./class/Pedido")
const Produto = require("./class/Produto")
const Usuario = require("./class/Usuario")

const administrador = new Administrador("João", 30)
const cliente = new Cliente("Maria", 25)

const produto1 = new Produto("Camisa", 50, 10)
const produto2 = new Produto("Tênis", 200, 5)

administrador.adicionarProduto(produto1)
administrador.adicionarProduto(produto2)

cliente.adicionarProduto(produto1)
cliente.adicionarProduto(produto2)

const pedido = new Pedido(cliente, cliente.carrinho)

let adminConcate = ""
let clientConcate = ""

administrador.produtos.forEach((produto) => adminConcate += administrador.produtos.indexOf(produto) !== administrador.produtos.length - 1 ? `   ${produto}, \n` : `   ${produto}\n`)

cliente.carrinho.forEach((produto) => clientConcate += cliente.carrinho.indexOf(produto) !== cliente.carrinho.length - 1 ? `    ${produto}, \n` : `    ${produto}\n`)

const panelCall = `${Usuario.acessoPainel()}
==================================\n`
const adminCall = `${administrador.acessoPainel()}
Produtos cadastrados pelo admin: [
${adminConcate}]
==================================\n`
const clientCall = `${cliente.acessoPainel()}
Carrinho da cliente: [
${clientConcate}]\n`
const totalCall = `Valor total do pedido: ${pedido.calcularTotal()}`

console.log(panelCall + adminCall + clientCall + totalCall)