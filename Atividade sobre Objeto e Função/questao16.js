var celular = [
    {
        marca: 'Xiaomi',
        modelo: 'Note 12',
        ano: 2022,
        
    },
    {
        marca: 'Apple',
        modelo: 'XV',
        ano: 2023,
        
    }
]

function contarPropiedades(objeto) {
    numerodePropriedades = 0
    for (let i in objeto) {
        numerodePropriedades++
    }

    return numerodePropriedades;
}
console.log(contarPropiedades(celular))