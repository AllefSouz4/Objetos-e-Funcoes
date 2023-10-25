var numeros = [ 
     { Nome : "Allef", Idade : 22},
     { Nome :"Agata", Idade : 13}, 
     { Nome : "Carla", Idade: 42}]
  
function ordenarObjetos(array) {
    var newage= array.sort((a, b) => a.Idade - b.Idade)
    return newage
    
}
console.log(ordenarObjetos(numeros))
