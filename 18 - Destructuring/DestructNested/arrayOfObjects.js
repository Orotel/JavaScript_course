const results = [{
    first:'joana',
    last:'Dark',
    country:'zanibia'
},{
    first:'Joao',
    last:'Badista',
    country:'nova zelandia'
},{
    first:'Martinho',
    last:'Lutero',
    country:'França'
},{
    first:'kid',
    last:'Bengala',
    country:'Brasil'
},]
// ========================ACESS DESTRUCT=====================


//first way to acess:
const [,second] = results //simplify
const {first:firstName} = second
console.log(firstName)

//second way to acess:
const [,{first:PrimeiroNome}] = results //nested
console.log(PrimeiroNome)