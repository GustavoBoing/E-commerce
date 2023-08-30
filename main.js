/*
//variável constante para o meu produto
const nomeProduto = "Camiseta Estados Unidos 22/23";
//variável constante para marca
const marca = "Nike";
//variável constante para preço
const preco = 129.90;
//variável constante para minha imagem
const nomeArqImagem = "Eua-masc.jpg"
*/
/*
const produto1 = {
    id: 1,
    nome: 'Camiseta Estados Unidos 22/23',
    marca: 'Nike',
    preco: 129.90,
    nomeArqImg: 'Eua-masc.jpg'
}

const produto2 = {
    id: 2,
    nome: 'Camiseta Manchester City 22/23',
    marca: 'Nike',
    preco: 129.90,
    nomeArqImg: 'city-masc.jpg'
}*/

const catalogo = [{
        id: 1,
        nome: 'Camiseta Estados Unidos 22/23',
        marca: 'Nike',
        preco: 129.90,
        imagem: 'Eua-masc.jpg',
        alt: 'Camiseta Estados Unidos 22/23',
        feminina: false
    },
    {
        id: 2,
        nome: 'Camiseta Manchester City 22/23',
        marca: 'Nike',
        preco: 129.90,
        imagem: 'city-masc.jpg',
        alt: 'Camiseta Manchester City 22/23',
        feminina: false
    },
    {
        id: 3, 
        nome: 'Camiseta Liverpool 22/23',
        marca: 'Nike',
        preco: 129.90,
        imagem: 'CamisetaLiverpool-Masc.jpg',
        alt: 'Camiseta Liverpool 22/23',
        feminina: false
    },
    {
        id: 4, 
        nome: 'Camiseta PSG 22/23',
        marca: 'Nike',
        preco: 129.90,
        imagem: 'PSG-masc.jpg',
        alt:'Camiseta PSG 22/23',
        feminina: false
    },
    {
        id: 5, 
        nome: 'Camiseta Barcelona 22/23',
        marca: 'Nike',
        preco: 129.90,
        imagem: 'barcelona-masc.jpg',
        alt:'Camiseta Barcelona 22/23',
        feminina: false
    },
    {
        id: 6, 
        nome: 'Camiseta Brasil 22/23',
        marca: 'Nike',
        preco: 129.90,
        imagem: 'brasil-masc.jpg',
        alt:'Camiseta Brasil 22/23',
        feminina: false
    },
    {
        id: 7, 
        nome: 'Camiseta São Paulo 22/23',
        marca: 'Nike',
        preco: 129.90,
        imagem: 'SPFC-masc.jpg',
        alt:'Camiseta São Paulo 22/23',
        feminina: false
    },
    {
        id: 8, 
        nome: 'Camiseta Flamengo 22/23 feminina',
        marca: 'Nike',
        preco: 129.90,
        imagem: 'fla-fem.jpg',
        alt:'Camiseta Flamengo 22/23 feminina',
        feminina: true
    },
    {
        id: 9, 
        nome: 'Camiseta São Paulo 22/23 feminina',
        marca: 'Nike',
        preco: 129.90,
        imagem: 'spfc-fem.jpg',
        alt:'Camiseta São Paulo 22/23 feminina',
        feminina: true
    }
];

//para cada produto do catalago de catalogo executa o que está dentro do for
for (const produtoCatalogo of catalogo){

    const cartaoProduto = 
    `<div id="card-produto-1">
        <img src="image/${produtoCatalogo.imagem}" alt="${produtoCatalogo.alt}Camiseta Estados Unidos" style="width: 250; height: 250px;">
        <p>${produtoCatalogo.marca}</p>
        <p>${produtoCatalogo.nome}</p>
        <p>R$${produtoCatalogo.preco}</p>
        <button>Carrinho</button>
    </div>`;

    //recupera o ID container-produto. O 'innerHTML' pega o conteudo dele e acrescenta o conteúdo da const cartão produto
    document.getElementById("container-produto").innerHTML += cartaoProduto;

}