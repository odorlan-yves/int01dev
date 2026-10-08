Desenvolvimento Web – Arrays, DOM e Eventos
Semana 04
Este projeto foi desenvolvido como atividade prática da disciplina de Desenvolvimento Web.

O objetivo da atividade é praticar os conceitos de Arrays, manipulação do DOM e eventos em JavaScript.

Estrutura do projeto
O projeto possui os seguintes arquivos:

semana04/ │ ├── index.html ├── app.js └── README.md

Bloco 1 – Matrizes e Métodos
Nesta parte foram utilizados os métodos forEach(), map(), filter()e reduce().

forEach()
O forEach()é utilizado para percorrer cada elemento de um array e executar uma ação.

No projeto, ele foi utilizado para percorrer a matriz de nomes e mostrar uma mensagem para cada nome.

nomes.forEach(function (nome) { console.log(Olá, ${nome}!); });

mapa()
O map()array percorre o array e cria um novo array com os elementos modificados.

No projeto, ele foi utilizado para transformar os nomes em letras secretas.

const nomesMaiusculos = nomes.map(function (nome) { return nome.toUpperCase(); });

A matriz original não é alterada.

filtro()
O filter()array cria um novo contendo apenas os elementos que atendem a uma determinada condição.

No projeto, foi utilizado para encontrar preços acima de R$ 20 e produtos com preço menor que R$ 50.

const precosAcimaDe20 = precos.filter(function (preco) { return preco > 20; });

A matriz original não é alterada.

reduzir()
É reduce()utilizado para acumular os valores de um array e retornar um único resultado.

No projeto, ele foi utilizado para somar os preços.

const somaPrecos = precos.reduce(function (total, preco) { return total + preco; }, 0);

Nesse caso, o resultado final é um único número.

Bloco 2 – Manipulação do DOM
Nesta parte foram utilizados métodos para selecionar, criar e modificar elementos HTML através do JavaScript.

querySelector()
Selecione querySelector()o primeiro elemento que corresponde a um seletor CSS.

Exemplo:

const titulo = document.querySelector("#titulo");

No projeto, ele foi utilizado para selecionar elementos como o título, a lista, o botão e os campos do formulário.

querySelectorAll()
Selecione querySelectorAll()todos os elementos que você precisa ao seletor informado.

Exemplo:

const parágrafos = document.querySelectorAll(".texto");

No projeto, ele foi utilizado para selecionar todos os parágrafos e contar os elementos <li>da lista.

HTML interno
O innerHTMLpermite inserir conteúdo HTML dentro de um elemento.

No projeto, ele foi utilizado para inserir itens na lista.

lista.innerHTML =

Primeiro item
Segundo item
;
criarElemento()
O createElement()permite criar novos elementos HTML utilizando JavaScript.

Exemplo:

const item = document.createElement("li");

item.textContent = "Terceiro item";

lista.append(item);

Dessa forma, um novo elemento <li>é criado e adicionado à lista.

lista de classes
O classListpermite adicionar, verificar e alternar classes CSS de um elemento.

Para adicionar uma classe:

elemento.classList.add("destaque");

Para verificar se existe uma classe:

elemento.classList.contains("destaque");

Para alternar uma classe:

elemento.classList.toggle("feito");

No projeto,essas funções foram utilizadas para destacar e marcar itens da lista.

Bloco 3 – Eventos
Nesta parte foram utilizados eventos para permitir a interação do usuário com a página.

adicionarOuvinteDeEvento()
O addEventListener()permite adicionar eventos aos elementos HTML.

Exemplo:

botao.addEventListener("clique", function() { console.log("Clicou!"); });

Nenhum projeto foi utilizado em eventos como:

click
mouseover
keyup
submit
Delegação de Eventos
Event Delegation é uma técnica que permite adicionar um único evento a um elemento pai para controlar os elementos filhos.

No projeto, foi utilizado um único addEventListener()na lista:

lista.addEventListener("click", function (e) {

se (e.target.tagName === "LI") { e.target.classList
