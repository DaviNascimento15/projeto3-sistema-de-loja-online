class Usuario {
    #nome
    #idade
    constructor(nome, idade) {
        this.#nome = nome
        this.#idade = idade
    }
    static acessoPainel() {
        return "Acesso genérico ao sistema"
    }
}

module.exports = Usuario