const person ={
    first:'frank',
    last:'castle',
    nickName:'punisher',
    fullName (){
        const {first,last,nickName} = this
        return(`${first} ${last} AKA: ${nickName}`)
    },
    printBio(){
        const myName = this.fullName()
        console.log(myName)
    },
    laugth:() => {
        const first = 'julian'
        console.log(this.first) // não consegue pegar o this do objeto person
        console.log(first) // unica var que pega é a da propria função 
    }
}
person.laugth() // arrow functions não pegam valores de fora nem com o this



