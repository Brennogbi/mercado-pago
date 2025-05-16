const produtos = [
  {
    nome: "Bordado com Bastidor",
    preco: 59.9,
    imagem: "img/sereiia.jpg",
    linkMercadoPago: "https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=EXEMPLO1"
  },
  {
    nome: "Bordado Infantil",
    preco: 45.5,
    imagem: "img/infantil.jpg",
    linkMercadoPago: "https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=EXEMPLO2"
  }
];

// Gera os produtos na página
const container = document.getElementById("produtos");
produtos.forEach((produto, index) => {
  const card = document.createElement("div");
  card.classList.add("produto");
  card.innerHTML = `
    <img src="${produto.imagem}" class="produto__imagem" alt="${produto.nome}" />
    <h3 class="produto__nome">${produto.nome}</h3>
    <p class="produto__preco">R$ ${produto.preco.toFixed(2)}</p>
    <button class="produto__botao" onclick="abrirModal(${index})">Comprar</button>
  `;
  container.appendChild(card);
});

// Modal
const modal = document.getElementById("modal");
const form = document.getElementById("formCliente");
const produtoSelecionado = document.getElementById("produtoSelecionado");
let produtoAtual = null;

function abrirModal(index) {
  produtoAtual = produtos[index];
  produtoSelecionado.innerText = `Comprar: ${produtoAtual.nome}`;
  modal.style.display = "flex";
}

document.getElementById("fecharModal").onclick = () => {
  modal.style.display = "none";
};

form.onsubmit = function (e) {
  e.preventDefault();
  const dados = Object.fromEntries(new FormData(form));
  
  // Aqui você pode enviar por e-mail ou armazenar como quiser.
  // Para agora, só redirecionamos:
  window.location.href = produtoAtual.linkMercadoPago;
};
