import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Alexandre", 11122233301);

const contaCorrente = new ContaCorrente(cliente1, 1001);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
const novaConta = new Conta(30, cliente1, 1001);


// console.log(novaConta);
// console.log(contaPoupanca);
// console.log(contaCorrente);