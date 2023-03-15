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
    }
}
person.fullName()
person.printBio()


