// можно сгенерировать в нужном количестве затем просто сложить массивы в рандомном порядке

let passwdSettigns = {
    passwdLength: 30,
    data: [
        { ascii: [48,57], count: 10, },     // 0-9
        { ascii: [97,122], count: 10, },    // a-z
        { ascii: [65,90], count: 10, },     // A-Z
    ]
};

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

console.log(generateASCII(97,122,10))
console.log(generateASCII(65,90,10))
console.log(generateASCII(48,57,10))

function generate(settings){
    // сумма всех count из settings
    let counts = settings?.data.reduce((acc, value)=> acc+=value.count, 0)

    // если counts > length то длина пароля будет равна counts
    const { passwdLength } = settings;
    const { data } = settings;

    const length = passwdLength > counts ? passwdLength : counts;
    
    console.log(passwdLength)
    
    let passwd = "";
    for(let i = 0; i<= passwdLength; i++){
        
        

    }
    return passwd
}


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(generate(passwdSettigns))
// console.log('1'.charCodeAt(0))