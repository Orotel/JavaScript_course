Neste arquivo iremos aprender sobre os loops no javascript
* Escrever FOR loops
* escrever WHILE loops
* fugir de loops infinitos
* iteração
* Row = linha

 O que são loops?
 -Fazer coisas repedidamente
 printar hello 10x
 somar todos os numeros de um array
 -Tipos:

                         **FOR
nele eu consigo iterar sobre arr,objt e strings
preocupação é com o index, com a posição do index
 for (let i = 0 ; i <= 10 ; i++){
 } 

                         **WHILE  
while( ${CONDIÇÃO}){
   console.log('Vou rodar até que a condição seja falsa')
}
voce não sabe quantas vezes terá de rodar
para sair do loop voce pode usar o if(talcoisacontecer) break; 
muito usado quando tenho determinadas coisas e só vou saber aleatoriamente o resultado inesperado, coisa que não pode ser usada no for. enquanto o jogador não perde a vida a condição será TRUE
                        
                        **FOR_OF
preocupação apenas com iteração
nova maneira de iterar
for(let sub of (array){
   console.log(sub )// aqui será a iteração
})
para iterar sobre um ojb preciso criar var com object.keys(obj) e para o value tambem

                        **FOR_IN
for(keys in obj){
   console.log(keys)
   console.log(obj[keys])

}
iteração muito usada para keys and values em objetos
nao precisa desse obj.key e blablabla pois ele por si só já traz automaticamente o objeto 
Usar somente em objetos