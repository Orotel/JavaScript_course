
// isPangram('The five boxing wizards jump quickly') //true
// isPangram('The five boxing wizards jump quick') //false
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
const alphabetOnText = []
function isPangram(text){
    for(let i = 0; i<text.length; i++){
        for(let j = 0; j<alphabet.length; j++){
            if(text[i] === alphabet[j] && alphabetOnText.indexOf(text[i]) == -1){
                alphabetOnText.push(text[i])
                
            }
        }
    }
        console.log(`sua frase contem ${alphabetOnText.length} letras do alfabeto que tem ${alphabet.length}`)
    
}
isPangram('abcdefgnopqrstuvwxyzzzzasdsa')
isPangram('The quick brown fox jumps over the lazy dog')
