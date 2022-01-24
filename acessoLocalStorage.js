
class AcessoLocalStorage {
  definirSaldo(saldo) {
    if(localStorage.getItem('saldoEmCarteira') != null) {
      alert('Saldo em carteira já adicionado, clique em Limpar Lista para adicionar um novo saldo!')
      inputSaldoEmCarteira.value = ''
      return
    } 
    if(!saldo) return alert('Digite quanto deseja gastar')
    //feature de saldo extra adicionada previamente para futuros cálculos
    if(localStorage.getItem('saldoExtra') === null) {
      getSaldoExtraEmCarteiraDatabase = {'saldoExtra' : Number(0)}
      setSaldoExtraEmCarteira(getSaldoExtraEmCarteiraDatabase)
    }
    getSaldoEmCarteiraDatabase = {'saldoInicial':Number(saldo),'saldo': Number(saldo)}
    setSaldoEmCarteira(getSaldoEmCarteiraDatabase)
    saldoEmCarteira.style.display = "block";
    inputSaldoEmCarteira.style.display = "none";
    renderizacaoDaPagina.renderizarCarteira()
  }
  novoSaldoAposAdicionarProduto() {
    const ultimoProdutoAdicionado = getProdutosDatabase[getProdutosDatabase.length - 1]
    getSaldoEmCarteiraDatabase.saldo =  getSaldoEmCarteiraDatabase.saldo - (ultimoProdutoAdicionado.preco * ultimoProdutoAdicionado.quantidade)
    setSaldoEmCarteira(getSaldoEmCarteiraDatabase)
    renderizacaoDaPagina.renderizarCarteira()
    }
  novoSaldoAoExcluirProduto () {
    getSaldoEmCarteiraDatabase.saldo = (getSaldoEmCarteiraDatabase.saldoInicial + getSaldoExtraEmCarteiraDatabase.saldoExtra) - getTotalDatabase.total
    setSaldoEmCarteira(getSaldoEmCarteiraDatabase)
    renderizacaoDaPagina.renderizarCarteira()
  }
  adicionarSaldoExtra(saldoExtra) {
    if(!saldoExtra) return alert('Escolha quanto de saldo extra deseja adicionar')
    if(isNaN(saldoExtra)) return alert('Digite apenas números')
    if(localStorage.getItem('saldoEmCarteira') == null) return alert('Defina um saldo para sua carteira antes de adicionar')
    //Só entrará nessa condição na primeira vez que utilizar o programa
    console.log(saldoExtra)
    getSaldoExtraEmCarteiraDatabase.saldoExtra += Number(saldoExtra)
    setSaldoExtraEmCarteira(getSaldoExtraEmCarteiraDatabase)
    getSaldoEmCarteiraDatabase.saldo += Number(saldoExtra)
    setSaldoEmCarteira(getSaldoEmCarteiraDatabase) // seta o valor adicionado no saldo da carteira
    renderizacaoDaPagina.renderizarCarteira()

  }
  totalDaCompra() {
    let total = 0
    getProdutosDatabase.forEach(element => {
      total += element.quantidade * element.preco
    })
    getTotalDatabase = {"total" : total}
    setTotal(getTotalDatabase)
    renderizacaoDaPagina.renderizarTotal()
  }
}


const acessoLocalStorage = new AcessoLocalStorage();
const definirSaldo = (saldo) => {
  saldo = Number(getSaldo());
  return acessoLocalStorage.definirSaldo(saldo);
};
document.querySelector("#confirmar-saldo").addEventListener("click", definirSaldo);

const adicionarSaldoExtra = (saldoExtra) => {
  saldoExtra = Number(getSaldoAdicionado());
  acessoLocalStorage.adicionarSaldoExtra(saldoExtra);
};

document
  .querySelector("#confirmar-saldo-extra-adicionado")
  .addEventListener("click", adicionarSaldoExtra);

