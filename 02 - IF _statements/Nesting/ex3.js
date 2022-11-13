
let password ='au2jbjbjbj'
if(password.length >= 6){
    if(password.indexOf(' ') === -1){ // esse método é utilizado para encontrar espaços na senha , o -1 é o resultado para a ausência de espaços. //
        console.log('valid password');
    } 
    else {
    console.log('password is long enough, but cannot contain spaces');
    }
}
else {
    console.log('password must be longer ');
}
