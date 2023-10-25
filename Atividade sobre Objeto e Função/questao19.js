var estoque = {
    produto1: 'camisa',
    quantidade1: 200,

    produto2: 'calça',
    quantidade2: 200,

    produto3: 'bermuda',
    quantidade3: 100,

    attEstoque(prod4, quant4) {

        this.produto4 = prod4 
        this.quantidade4 = quant4

    }

}

estoque.attEstoque('camiseta', 150 )

console.log(estoque)


