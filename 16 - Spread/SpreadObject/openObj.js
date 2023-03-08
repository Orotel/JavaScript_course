const feline = { legs: 4,
     family: 'felidae'
 };
const canine = { family: 'caninae',
 furry: true 
};

// crio 2 raças 
// adequo meu : cachorro,leão e meu gatoCachorro 

const dog = {...canine,
    isPet:true,
    name:'clodosvaldo' 
}
const lion = {...feline,
    isPet:false,
    name:'simba'
}
const CatDog = {...feline , ...canine ,
     name:'CatDog'}

console.log(dog)
console.log(lion)
console.log(CatDog)