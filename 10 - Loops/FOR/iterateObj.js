// iteration in obj
let obj = [{
    name:'julian',
    age:15,
    city:'florianopolis'
},{
    name:'Rafael',
    age:18,
    city:'são paulo'
},{
    name:'Anselmo',
    age:36,
    city:'jaragua do sul'
},]
for(let i = 0; i< obj.length; i++){
    let student = obj[i]
    console.log(
        ` o nome dele é ${student.name} e ele tem a idade de ${student.age} e a sua cidade é ${student.city}
    `)
}
let sumAges = 0

for(let i = 0; i<obj.length; i++) {
    sumAges += obj[i].age
}
console.log(`${sumAges/obj.length}`)
