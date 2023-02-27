function isValidPassword (password,username){
    if (password.length >7){
        if(password.indexOf(' ') <0){
            if(password.indexOf(username)<0){
                return 'voce passou no teste'
            }
            return 'voce ta usando o mesmo username'
        }return 'voce colocou espaços na senha'
    }return 'sua senha precisa ter no mínimo 8 caracteres'
}

console.log(isValidPassword('doLuvr123!', 'dogLuvr'))