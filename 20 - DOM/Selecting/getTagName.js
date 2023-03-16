  // nesta pasta usaremos o html indexALL
  // ================================================================================//


  // no tagName usamos a tag para pegar no DOM
  // é mais utilizada porque consegue pegar mais de um elemento de uma vez
  // cada tag é um objeto e esta em uma espécie de array que não é array.

const entradas  =document.getElementsByTagName('input')
// apesar de ser um array não podemos usar os metodos de arr, portanto devemos com o spread coloca-lo em forma de um arr.

const arrEntrada = [...entradas]
  for(let eachEntrada of arrEntrada ){
    console.log(eachEntrada.value)
  }