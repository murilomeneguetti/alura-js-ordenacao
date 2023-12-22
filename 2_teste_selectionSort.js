const livros = require('./listaLivros');

function menorValor(arrProdutos, posicaoInicial) {
    //posicao do preco mais barato
    let maisBarato = posicaoInicial;
    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
        if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
            maisBarato = atual;
        }
    }
    return maisBarato;
}

for (let atual = 0; atual < livros.length - 1; atual ++) {
    let menor = menorValor(livros, atual);

    let livroMenorPreco = livros[menor];

    livros[menor] = livros[atual];
    livros[atual] = livroMenorPreco;
    
}

console.log(livros);
