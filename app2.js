

console.log("====================================");
console.log("BLOCO 1 – ARRAYS E MÉTODOS");
console.log("====================================");


const nomes = ["Ana", "Carlos", "Maria"];



nomes.forEach(function (nome) {
    console.log(`Olá, ${nome}!`);
});


const nomesMaiusculos = nomes.map(function (nome) {
    return nome.toUpperCase();
});

console.log("Nomes em maiúsculas:", nomesMaiusculos);



const precos = [10, 25, 40, 5, 60];



const precosAcimaDe20 = precos.filter(function (preco) {
    return preco > 20;
});

console.log("Preços acima de R$ 20:", precosAcimaDe20);


const somaPrecos = precos.reduce(function (total, preco) {
    return total + preco;
}, 0);

console.log("Soma de todos os preços:", somaPrecos);



const produtos = [
    {
        nome: "Caderno",
        preco: 15
    },

    {
        nome: "Caneta",
        preco: 5
    },

    {
        nome: "Mochila",
        preco: 80
    },

    {
        nome: "Livro",
        preco: 35
    }
];


const nomesProdutos = produtos.map(function (produto) {
    return produto.nome;
});

console.log("Nomes dos produtos:", nomesProdutos);


const produtosMenoresQue50 = produtos.filter(function (produto) {
    return produto.preco < 50;
});

console.log(
    "Produtos com preço menor que R$ 50:",
    produtosMenoresQue50
);


const somaProdutos = produtos.reduce(function (total, produto) {
    return total + produto.preco;
}, 0);

console.log(
    "Soma dos preços dos produtos:",
    somaProdutos
);



produtos.forEach(function (produto) {
    console.log(
        `Nome: ${produto.nome} - R$ ${produto.preco}`
    );
});



console.log("");
console.log("====================================");
console.log("BLOCO 2 – MANIPULAÇÃO DO DOM");
console.log("====================================");


const titulo = document.querySelector("#titulo");

titulo.textContent = "Blog do João";

console.log("Título alterado:", titulo.textContent);



const paragrafos = document.querySelectorAll(".texto");

paragrafos.forEach(function (paragrafo) {
    console.log("Parágrafo:", paragrafo.textContent);
});



const lista = document.querySelector("#lista");

lista.innerHTML = `
    <li>Primeiro item</li>
    <li>Segundo item</li>
    <li>Item de evento 1</li>
    <li>Item de evento 2</li>
    <li>Item de evento 3</li>
`;


const terceiroItem = document.createElement("li");

terceiroItem.textContent = "Terceiro item";

lista.append(terceiroItem);



terceiroItem.classList.add("destaque");

console.log(
    "Possui a classe destaque?",
    terceiroItem.classList.contains("destaque")
);



const tarefas = [
    "Estudar JS",
    "Fazer exercícios",
    "Revisar DOM"
];

tarefas.forEach(function (tarefa) {

    const item = document.createElement("li");

    item.textContent = tarefa;

    lista.append(item);
});



const primeiroLi = lista.querySelector("li");

primeiroLi.classList.add("feito");



const quantidadeItens = lista.querySelectorAll("li").length;

console.log(
    "Quantidade total de itens na lista:",
    quantidadeItens
);



console.log("");
console.log("====================================");
console.log("BLOCO 3 – EVENTOS");
console.log("====================================");



const botao = document.querySelector("#botao");

botao.addEventListener("click", function () {
    console.log("Clicou!");
});



botao.addEventListener("mouseover", function () {
    botao.textContent = "Pode clicar!";
});



const campoNome = document.querySelector("#nome");

campoNome.addEventListener("keyup", function () {

    console.log(
        "Nome digitado:",
        campoNome.value
    );

});



lista.addEventListener("click", function (e) {

    // Verifica se o elemento clicado é um <li>
    if (e.target.tagName === "LI") {

        // Alterna a classe "feito"
        e.target.classList.toggle("feito");

        // Mostra o texto do item clicado
        console.log(
            "Item clicado:",
            e.target.textContent
        );
    }

});


const novoItem = document.createElement("li");

novoItem.textContent = "Item criado pelo JavaScript";

lista.append(novoItem);


const formulario = document.querySelector("#formulario");

const campoTarefa = document.querySelector("#tarefa");


formulario.addEventListener("submit", function (e) {

    e.preventDefault();


    const textoTarefa = campoTarefa.value.trim();


    if (textoTarefa === "") {
        return;
    }


    const novaTarefa = document.createElement("li");


    novaTarefa.textContent = textoTarefa;


    lista.append(novaTarefa);


    campoTarefa.value = "";

});

console.log("");
console.log("====================================");
console.log("PROJETO EXECUTADO COM SUCESSO!");
console.log("====================================");