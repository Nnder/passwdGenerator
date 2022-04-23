let passwdSettigns = {
    length: 10,
    numbers: true,
    upperCase: true,
};

function generate(settings){
    let passwd = "";
    let from;
    let to;
    for(let i = 0; i<= settings.length; i++){
        passwd += String.fromCharCode(from + Math.floor(Math.random()* to))
    }
    return passwd
}


let b = '12';
console.log(generate(passwdSettigns))
console.log('1'.charCodeAt(0))
console.log('a'.charCodeAt(0))
console.log(String.fromCharCode(97))