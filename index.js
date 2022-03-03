import { Cliente } from "./Cliente.js";
import { Conta } from "./Contas/Conta.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";

const cliente1 = new Cliente("Alexandre", 11122233301);

const contaCorrente = new ContaCorrente(cliente1, 1001);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
// const novaConta = new Conta(30, cliente1, 1001);
const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10);


// console.log(novaConta);
// console.log(contaPoupanca);
// console.log(contaCorrente);
console.log(contaSalario);