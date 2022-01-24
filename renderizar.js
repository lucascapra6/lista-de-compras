//localStorageAtalhos

class RenderizacaoDaPagina {
  renderizarCarteira = () => {
    document.querySelector('#saldo-em-carteira').style.display = 'block'
        document.querySelector('#saldo-em-carteira').innerHTML = `R$ 0,00`
        if(localStorage.getItem('saldoEmCarteira') != null) {
          saldoEmCarteira.innerHTML= `R$ ${(getSaldoEmCarteiraDatabase.saldo).toFixed(2).replace('.',',')}`
        }
  };
 
  renderizarProdutos = () => {
    renderizacaoDaPagina.limparAoRenderizar();
    getProdutosDatabase.forEach((element, indice) => {
      listaDeCompras.criarEstruturaDaListaDeProdutos(
        element.produto,
        element.quantidade,
        element.preco,
        indice
      ); //renderiza a lista
    });
  };

  renderizarTotal = () => {
    if(localStorage.getItem('total') !== null) {
      totalDaCompra.innerHTML = `R$ ${getTotalDatabase.total.toFixed(2).replace('.',',')}`
    }
  }
  limparAoRenderizar = () => {
    //limpa a tela para renderizar
    const recebeInfo = document.querySelector("div#recebe-info");
    recebeInfo.innerHTML = "";
  };
}

const renderizacaoDaPagina = new RenderizacaoDaPagina();

document
  .querySelector("body")
  .addEventListener("reload", renderizacaoDaPagina.renderizarProdutos());

  document.querySelector("reload", renderizacaoDaPagina.renderizarCarteira())

document.querySelector("reload", renderizacaoDaPagina.renderizarTotal())