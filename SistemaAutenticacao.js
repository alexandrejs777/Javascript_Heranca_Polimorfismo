export class SistemaAutenticacao{
    static Login(funcionario, senha){
        return funcionario.senha == senha;
    }
}