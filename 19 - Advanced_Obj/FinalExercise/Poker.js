const deck = {
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
// agora um jogo sendo inicializado
deck.initialize();
deck.shufle()
const hand1 = deck.nextCard(2)
const hand2 = deck.nextCard(2)
const hand3 = deck.nextCard(5)



// esse codigo é um exemplo de como o objeto facilita a nossa vida e agora com o uso do THIS começamos a usar variaveis globais e locais de uma forma mais dinâmica e rápida.