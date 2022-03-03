import { Cliente } from "./Cliente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Alexandre", 10000, 36549878902);
diretor.CadastrarSenha("1234567");

const gerente = new Gerente("Fábio", 5000, 37893512312);
gerente.CadastrarSenha("123");

const estaLogado = SistemaAutenticacao.Login(diretor, "1234567");

console.log(estaLogado);