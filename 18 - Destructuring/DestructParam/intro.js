//função que printa um nome inteiro
const fullName = ({first,last}) => (
    `${first} ${last}`
)
//objeto de um corredor
const runner={
    first:'eliud',
    last:'kipitotey',
    country:'Belgica'
}

// colocar corredor na função para saber o nome inteiro dele.
console.log(fullName(runner))



// ==========================Jeito antigo ===============
const oldFullName = (obj) =>{
    return `${obj.first} ${obj.last}`
}

console.log(oldFullName(runner))