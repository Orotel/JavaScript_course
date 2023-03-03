/* 
function outer(){
    let movie = 'amadeus'

    function inner(){
        console.log(movie)
     }
}
inner()
não funcionará pois apesar de eu estar acessando algo do pai eu não chamei o metodo da funcão inner*/ 

// porem se eu chamar a função inner dentro de outer eu consigo.

function outer(){
    let movie = 'amadeus'

    function inner(){
        function inside(){
            let movie = 'the punisher' 
            console.log(movie)
        }
        inside()
     }
    inner()
}
outer()