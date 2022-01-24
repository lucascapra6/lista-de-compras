const setListaDeCompras = (database) => localStorage.setItem('listaDeCompras', JSON.stringify(database))
const setSaldoEmCarteira = (saldoEmCarteira) => localStorage.setItem('saldoEmCarteira', JSON.stringify(saldoEmCarteira))
const setSaldoExtraEmCarteira = (saldoExtra) => localStorage.setItem('saldoExtra', JSON.stringify(saldoExtra))
const setTotal = (total) => localStorage.setItem('total', JSON.stringify(total))
let getSaldoEmCarteiraDatabase =  JSON.parse(localStorage.getItem('saldoEmCarteira')) ?? []
let getProdutosDatabase = JSON.parse(localStorage.getItem("listaDeCompras")) ?? [];
let getSaldoExtraEmCarteiraDatabase = JSON.parse(localStorage.getItem('saldoExtra')) ?? []
let getTotalDatabase = JSON.parse(localStorage.getItem('total')) ?? []