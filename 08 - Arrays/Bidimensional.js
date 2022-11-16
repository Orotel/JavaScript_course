// we can put array inside another array
let AverageTemp =[]
AverageTemp[0]  =[72,75,79,79,81,81]
AverageTemp[1]  =[81,79,75,75,73,73]




// Or the same CODE in other way
let AverageTemp2 =[]

//    DAY 1
AverageTemp2[0]=[]
AverageTemp2[0][0] =72; 
AverageTemp2[0][1] =72; 
AverageTemp2[0][2] =75; 
AverageTemp2[0][3] =79; 
AverageTemp2[0][4] =79; 
AverageTemp2[0][5] =81; 
AverageTemp2[0][6] =81;

//    DAY 2
AverageTemp2[1]=[]
AverageTemp2[1][0] =81; 
AverageTemp2[1][1] =81; 
AverageTemp2[1][2] =79; 
AverageTemp2[1][3] =75; 
AverageTemp2[1][4] =75; 
AverageTemp2[1][5] =73; 
AverageTemp2[1][6] =73;

console.log(AverageTemp)
console.log(AverageTemp2)
console.table(AverageTemp)
console.table(AverageTemp2)


// Nested Arrays
const Board = [
    ['0',null,'X']
    [null,'X','O']
    ['X','O',null]
]