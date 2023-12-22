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

//exportando para poder usar a função em outros códigos;
module.exports = menorValor;

// console.log(`O livro mais barato custa ${livros[maisBarato].preco} reais e o título é ${livros[maisBarato].titulo}`);
