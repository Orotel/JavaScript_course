const isIven = function(num){// regular function expression
    return num %2 ===0;
}

const isIven1 = (num) => {  //arrow function with parens around parameter
    return num % 2 === 0;
}

const isIven2 = num =>{     //no parens around parameter
    return num % 2 ===0;
}

const isIven3 = num =>(     //Implicit return,accepts one value
    num % 2 === 0
)

const isIven4 = num => num % 2 ===0; // one liner implicit return 