const hability = {

    skills : [
    'Communication','Teamwork','Problem solving',
    'Initiative and enterprise',
    'Planning and organising',
    'Self-management',
    'Learning',
    'Technology',
    ],

    random(){
        const {skills} = this
        const idx = Math.floor(Math.random() * skills.length)
        return skills[idx]
    },
    start(){
        this.timerID = setInterval(() =>{
            console.log(`${this.random()}`)
        },1000)
    },
    stop(){ // stop em tempo real no console.
        clearInterval(this.timerID);
        console.log('isso é tudo pessoal')
    }
}


hability.start()
