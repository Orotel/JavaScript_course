 const square = function (X){
    return X*X
 }
// se eu só tenho um parametro não preciso de parenteses
const arrowSquare = (X) => { 
    return X*X
}

const isIven = num =>{
    return num%2 === 0 
}
const multiply = (num1,num2) => {
    return num1*num2
}



console.log(square(2))
console.log(arrowSquare(2))
console.log(isIven(2))
console.log(multiply(2,3))