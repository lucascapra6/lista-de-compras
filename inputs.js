const totalDaCompra = document.querySelector("#total");
const saldoEmCarteira = document.querySelector("#saldo-em-carteira");
const inputSaldoEmCarteira = document.querySelector("#input-saldo-em-carteira");
const inputAdicionarSaldoExtra = document.querySelector("#input-adicionar-saldo-extra");
const confirmarSaldoAdicionado = document.querySelector(
  "#confirmar-saldo-adicionado"
);
const inputPreco = document.querySelector('#input-preco')
const getSaldo = () => document.querySelector("#input-saldo-em-carteira").value;
const getSaldoAdicionado = () =>
  document.querySelector("#input-adicionar-saldo-extra").value;

const limparInputs = (inputs) => {
inputs.forEach(element => element.value = '')
}