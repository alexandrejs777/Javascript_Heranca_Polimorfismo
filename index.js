import { Cliente } from "./Cliente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Alexandre", 10000, 36549878902);
diretor.CadastrarSenha("1234567");

const gerente = new Gerente("Fábio", 5000, 37893512312);
gerente.CadastrarSenha("123");

const cliente = new Cliente("Laís", 12345678910, "456");

const diretorEstaLogado = SistemaAutenticacao.Login(diretor, "1234567");
const gerenteEstaLogado = SistemaAutenticacao.Login(gerente, "123");


console.log("Diretor: " + diretorEstaLogado);
console.log("Gerente: " + gerenteEstaLogado);
console.log("Cliente: " + clienteEstaLogado);

const clienteEstaLogado = SistemaAutenticacao.Login(cliente, "456");