// EXAMPLE
// let passwdSettigns = [
//     { ascii: [48,57], length: 10, },     // 0-9
//     { ascii: [97,122], length: 10, },    // a-z
//     { ascii: [65,90], length: 10, },     // A-Z
// ]
//
// generate(passwdSettigns)

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(str){
    str = str.split('');
    for(let i = 0; i <= str.length; i++){
        let x = random(0,str.length-1);
        let y = random(0,str.length-1);
        let tmp = str[x];
        str[x] = str[y];
        str[y] = tmp
    }
    return str.join('')
}

function generateASCII(from, to, length){
    let result = "";
    for(let i = 0; i<= length-1; i++){
        result += String.fromCharCode(random(from,to))
    }
    return result
}

function generate(params){
    let passwd = "";
    for(param of params)
        passwd += generateASCII(element.ascii[0], element.ascii[1], element.length)
    return shuffle(passwd)
}