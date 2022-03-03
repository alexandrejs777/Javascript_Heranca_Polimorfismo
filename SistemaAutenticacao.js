/*
    Ser autenticável significa ter o método "autenticar"
*/

export class SistemaAutenticacao{
    static Login(autenticavel, senha){
        return autenticavel.Autenticar(senha);
    }
}