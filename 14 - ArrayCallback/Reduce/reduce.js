 const numbers = [20,324,12,34,67,79,02]

//acumulator=numbers[0] + acumulator=numbers[1], isso até o final do arr.

 const reducting =  numbers.reduce((acumulator,currentValue) =>{
    return acumulator+currentValue
 })
 
 console.log(reducting)