var texto = 'ola tudo bem'

function inverterString (string1){
    let strArr = string1.split('')

    let arrInvert = strArr.reverse()

    let invertedString = arrInvert.join('')

    console.log(invertedString)

}
inverterString(texto)