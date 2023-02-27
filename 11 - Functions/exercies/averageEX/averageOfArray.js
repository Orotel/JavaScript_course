// Write a function to find the average value in an array of numbers
//avg([0,50]) //25
//avg([75,76,80,95,100]) //85.2


function avg (arr){
    let counter=0
    let sum= 0
    for(let i = 0; i <arr.length; i++){
        sum += arr[i]
        counter++
    }
    return sum/counter
}
console.log(avg([10,10,90,90]))