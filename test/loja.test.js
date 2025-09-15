const Cliente = require("../class/Cliente");
const Administrador = require("../class/Administrador");
const Produto = require("../class/Produto");
const Pedido = require("../class/Pedido");

describe("Sistema de Loja Online", () => {
  test("Cliente deve conseguir adicionar produtos ao carrinho", () => {
    const cliente = new Cliente("Maria", 20);
    const produto = new Produto("Camisa", 50, 10);
    cliente.adicionarProduto(produto);

    expect(cliente.carrinho.length).toBe(1);
  });

  test("Pedido deve calcular o valor total corretamente", () => {
    const cliente = new Cliente("Maria", 20);
    const produto = new Produto("Camisa", 50, 10);
    cliente.adicionarProduto(produto);

    const pedido = new Pedido(cliente, cliente.carrinho);
    expect(pedido.calcularTotal()).toBe(50);
  });

  test("Administrador deve adicionar produto ao catálogo", () => {
    const admin = new Administrador("João", 30);
    const produto = new Produto("Tênis", 200, 5);
    admin.adicionarProduto(produto);

    expect(admin.produtos.length).toBe(1);
  });

  test("Polimorfismo no acessoPainel de Cliente", () => {
    const cliente = new Cliente("Ana", 22);
    expect(cliente.acessoPainel()).toBe("Acesso ao painel de compras.");
  });

  test("Polimorfismo no acessoPainel de Administrador", () => {
    const admin = new Administrador("Lucas", 25);
    expect(admin.acessoPainel()).toBe("Acesso ao painel administrativo.");
  });
});