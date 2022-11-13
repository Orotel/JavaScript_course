//      -- OPERATOR PRECEDENCE--
// NOT (!) has higher precedence than &&
// and || has higher precedence than || 
// (!)   1º
// (&&)  2º
// (||)  3º

let x = 7 ;
console.log(x == 7 || x == 3 && x > 10)

