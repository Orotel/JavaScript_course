// object.keys(obj) = pegar keys de um obj
// object.values(obj) = pegar values de um obj

const movieReviews = {
    arrival          :9.5,
    amelie           :9,
    coraline         :8,

}
for (let movie of Object.keys(movieReviews)){
    console.log(movie, movieReviews[movie])
}// porem nessa iteração nao consigo os valores


const rating = Object.values(movieReviews)
let total = 0
for (let r of rating){
    total += r
}
let average = total/ rating.length
console.log(average)