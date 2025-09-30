// acessibilidade.js
// Autores: Leandro Oliveira, Thiago Rocha, Pedro Henrique, Amanda Santos, Paulo Henrique, Willian Carvalho e João Alberto
// Funções: contraste, ajuste de fonte, leitor de voz, persistência no localStorage
//Uso: adicionsar <script
// acessibilidade.js
// Autor: Grupo 5
// Alternar alto contraste
function toggleContraste(){
    document.body.classList.toggle ("alto-contraste");

}
//Aumentar ou diminuir fonte
function alterarFonte(acao) {
    const body = document.body;
    let tamanhoAtual = parseFloat(window.getComputedStyle(body).fontSize);

    if (acao === "aumentar" && tamanhoAtual < 30) {
        body.style.fontSize = (tamanhoAtual + 2) + "px";
    } else if (acao === "diminuir" && tamanhoAtual > 12) {
        body.style.fontSize = (tamanhoAtual - 2) + "px";
    }
}

//Ler texto com voz
function lerTexto(seletor){ const elemento = document.querySelector(seletor);
    if(elemento) {
      const mensagem = new SpeechSynthesisUtterance(elemento.innerText);
      mensagem.lang = "pt-BR";
      speechSynthesis.speak(mensagem);  
     }

}

/* const toggleBtn = document.querySelector('.menu-toggle');
const acessibilidadeToolbar = document.querySelector('.acessibilidade-toolbar');

toggleBtn.addEventListener('click', () => {
  acessibilidadeToolbar.classList.toggle('active');
}); */

// Seletores dos botões
const toggleLinksBtn = document.querySelector('#menu-toggle-links');
const toggleAcessibilidadeBtn = document.querySelector('#menu-toggle-acessibilidade');

// Seletores dos menus
const navLinks = document.querySelector('.nav-links');
const acessibilidadeToolbar = document.querySelector('.acessibilidade-toolbar');

// Abre/fecha menu de links principais
toggleLinksBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Abre/fecha toolbar de acessibilidade
toggleAcessibilidadeBtn.addEventListener('click', () => {
  acessibilidadeToolbar.classList.toggle('active');
});

