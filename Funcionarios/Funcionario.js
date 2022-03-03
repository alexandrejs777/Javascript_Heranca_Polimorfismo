export class Funcionario {
  constructor(nome, salario, cpf) {
    this._nome = nome;
    this._salario = salario;
    this.cpf = cpf;

    this._bonificacao = 1;
    this._senha;
  }

Autenticar(senha){
    return senha == this._senha;
}

  CadastrarSenha(senha) {
      this._senha = senha;
  }
}
