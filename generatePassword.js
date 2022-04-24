// можно сгенерировать в нужном количестве затем просто сложить массивы в рандомном порядке

let passwdSettigns = [
        { ascii: [48,57], count: 10, },     // 0-9
        { ascii: [97,122], count: 10, },    // a-z
        { ascii: [65,90], count: 10, },     // A-Z
]

// на рандом выбирать одно из 3 условий
// затем на рандом из x-y

// если общий count > PasswdLength то PasswdLength = сумме всех count


function generateASCII(from, to, length){
    let result = "";
    for(let i = 0; i<= length-1; i++){
        result += String.fromCharCode(random(from,to))
    }
    return result
}

// let example = [...generateASCII(97,122,30).split(''), ...generateASCII(65,90,10).split(''), ...generateASCII(48,57,10).split('')]
// console.log(example)
// console.log(shuffle(example))
// console.log(generateASCII(65,90,10))
// console.log(generateASCII(48,57,10))


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

function generate(settings){
    // // сумма всех count из settings
    // let counts = settings?.data.reduce((acc, value)=> acc+=value.count, 0)

    // // если counts > length то длина пароля будет равна counts
    // const { passwdLength } = settings;
    // const { data } = settings;

    // const length = passwdLength > counts ? passwdLength : counts;
    
    
    let passwd = "";
    for(element of settings){
        
        passwd += generateASCII(element.ascii[0], element.ascii[1], element.count)

    }
    return shuffle(passwd)
}

console.log(generate(passwdSettigns))


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// console.log('1'.charCodeAt(0))