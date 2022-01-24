class Funcionalidades {
	removerProduto = (evento) => {
		const itemSelecionado = evento.target
		const indiceDoItemSelecionado = itemSelecionado.dataset.indice
		getProdutosDatabase.splice(indiceDoItemSelecionado, 1)
		setListaDeCompras(getProdutosDatabase)
		acessoLocalStorage.totalDaCompra()
		acessoLocalStorage.novoSaldoAoExcluirProduto()
		renderizacaoDaPagina.renderizarProdutos()
	}
	limparLista() {
		localStorage.clear()
		totalDaCompra.innerHTML = `R$ 0,00`
		saldoEmCarteira.innerHTML = `R$ 0,00`
		document.querySelector("#recebe-info").innerHTML = ''
		alert('Lista de Compras reiniciada!')
	}
}

const funcionalidades = new Funcionalidades


document.querySelector('#recebe-info').addEventListener('click',funcionalidades.removerProduto)
document.querySelector('#limpar-lista').addEventListener('click', funcionalidades.limparLista)