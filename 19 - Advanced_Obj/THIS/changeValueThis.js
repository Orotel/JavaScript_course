const obj = {
    city : 'florianopolis',
    mycity(){
        return `${this.city}`
    },
    callCity(){
        console.log(this.mycity())
    }
}
const varOfMethod = obj.callCity

// varOfMethod() não vai rodar porque ele esta referenciando ao window