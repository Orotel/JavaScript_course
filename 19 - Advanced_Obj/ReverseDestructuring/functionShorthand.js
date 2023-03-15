const getStats =(arr) =>{
    const max = Math.max(...arr)
    const min = Math.min(...arr)
    const sum = arr.reduce((total,currVal) => total+currVal)
    const avg = sum / arr.length
    return{
        max,
        min,
        sum,   
        avg
    }
}
const reviews = [4.5,5.0,2.8,3.5,4.0,3.5]

// função retorna um obj com  as variaveis {max,min,sum,avg}
const stats = getStats(reviews)
console.log(stats)