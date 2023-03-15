    //  criamos o makedeck e ele vira entao uma factory e retorna o nosso trabalho arduo para ser replicado em alguma variavel.
const makeDeck =() => {
    return{
    suits:['hearts','diamonds','spades','clubs'],   
    Values:'2,3,4,5,6,7,8,9,10,J,Q,K,A',
    allCards: [],
    drawnCards : [],

    
    initialize(){
        const {suits,Values,allCards} =this
        for(let suit of suits){
            for(let value of Values.split(',')){
            this.allCards.push({
                suit,
                value
            })
            }
        }

    },
    nextCard(nums){
        let i = 0 
        while(i < nums){
            const tempCard = this.allCards.pop()
            this.drawnCards.push(tempCard)
            i++

        }

    },
    shufle(){
        // loop over array backwards
        const {allCards} = this
        for (let i = allCards.length - 1; i > 0; i--) {
            // pick random index before current element
            const j = Math.floor(Math.random() * (i + 1));
            // swap  
            [allCards[i], allCards[j]] = [allCards[j], allCards[i]];
          }
          return allCards;
    }
 }
}
// agora para criar um deck usamos o makedeck e o colocamos em uma var

const AnselmoDeck = makeDeck()
AnselmoDeck.initialize();
AnselmoDeck.shufle()

// ====================================================
const JulianoDeck = makeDeck()
JulianoDeck.initialize();
JulianoDeck.shufle()

// vemos que as ambas são diferentes pois o sufle é proprio de cada

console.log(JulianoDeck.allCards)
console.log(AnselmoDeck.allCards)
