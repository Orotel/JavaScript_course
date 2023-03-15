// objetivo é fazer uma função que aceita um objeto e retorna uma copia desse objeto com uma prop nova
//prop = key and value

const rule = 'host';
const person = 'jools Holland'

const team = {
    [rule] : person
}

// função new prop
function OldaddProp(obj,key,value){
    const copy = {...obj}
    copy[key] = value
    return copy
}

// Jeito atualizado
// function addProp(obj,key,value){
//     return{...obj,[key]:value}
// }

// jeito atualizado 2.0
// como estamos retornando um objeto usamos o ()
const addProp = (obj,key,value) =>({...obj,[key]:value})

console.log(addProp(team,'catarinense',':)'))





 