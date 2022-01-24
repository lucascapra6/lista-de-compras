class ListaDeCompras {
  constructor(produto, quantidade, preco) {
    this.produto = produto;
    this.quantidade = quantidade;
    this.preco = preco;
  }
  adicionarProduto() {
    if (!this.produto || !this.quantidade || !this.preco) {
      alert("insira algo nos campos");
      return false;
    }
    if (localStorage.getItem('saldoEmCarteira') == null) {
      alert("Digite quanto deseja gastar em suas compras");
      return false;
    }
    getProdutosDatabase.push({
      produto: this.produto,
      quantidade: this.quantidade,
      preco: this.preco,
    });
    setListaDeCompras(getProdutosDatabase);
    renderizacaoDaPagina.limparAoRenderizar();
    limparInputs([
      document.querySelector("#input-produto"),
      document.querySelector("#input-quantidade"),
      document.querySelector("#input-preco"),
    ]);
    acessoLocalStorage.totalDaCompra()
    acessoLocalStorage.novoSaldoAposAdicionarProduto()
    renderizacaoDaPagina.renderizarProdutos();
  }
  
  criarEstruturaDaListaDeProdutos(nome, quantidade, preco, indice) {
    if(localStorage.getItem('saldoEmCarteira') == null) return alert('Insira quanto deseja gastar')
    const infoAdicionada = document.createElement("div");
    infoAdicionada.classList.add("info-adicionada");
    document.querySelector("#recebe-info").appendChild(infoAdicionada);
    infoAdicionada.innerHTML = `
    <div id="produto-adicionado">
        <p>${nome.upperCaseFirstCharactere()}</p>
    </div>
    <div id="quantidade-adicionada">
        <p>${quantidade}</p>
    </div>
    <div id="preco-adicionado">
       <p>R$${preco.toFixed(2).replace(".", ",")}</p> 
       <input type="button" value="X" id="excluir-item" data-indice=${indice}
    </div>
    <br>`;
  }
}
//captura inputs
const getnome = () => document.querySelector("#input-produto").value;
const getQuantidade = () => document.querySelector("#input-quantidade").value;
const getPreco = () => document.querySelector("#input-preco").value;

//envia inputs pro construtor
const listaDeCompras = new ListaDeCompras();
const criarEstruturaDaListaDeProdutos = (nome, quantidade, preco) => {
  nome = getProduto();
  quantidade = Number(getQuantidade());
  preco = Number(getPreco());
  return listaDeCompras.criarEstruturaDaListaDeProdutos(nome, quantidade, preco);
};

const adicionarProduto = () => {
  const nome = getnome();
  const quantidade = Number(getQuantidade());
  const preco = Number(getPreco());
  const listaDeCompras = new ListaDeCompras(nome, quantidade, preco);
  listaDeCompras.adicionarProduto();
};

document
  .querySelector("#add-produto")
  .addEventListener("click", adicionarProduto);

String.prototype.upperCaseFirstCharactere = function () {
  return this.charAt(0).toUpperCase() + this.substr(1);
};

//força a troca de qualquer tentativa de usar , para . nos inputs
document.querySelector("body").addEventListener("keyup", (event) => {
  if ((event.key = ",")) {
    [inputSaldoEmCarteira, inputAdicionarSaldoExtra, inputPreco].forEach(
      (element) => (element.value = element.value.replace(",", "."))
    );
  }
});
