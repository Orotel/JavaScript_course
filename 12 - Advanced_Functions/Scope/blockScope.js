//block scope
//diferents scope rules to type of variables

if(true){
    var animal ='eel'// if use var we have different rules from scope
    console.log(animal)
}

if(true){
    // const plant ='orquidea' if i use const this give error
    console.log(plant)
}

console.log(plant)    
console.log(animal)