// задание №1
let a = Number(prompt("Введите 1-ый элемент массива"))
let b = Number(prompt("Введите 2-ой элемент массива"))
let c = Number(prompt("Введите 3-ий элемент массива"))
let d = Number(prompt("Введите 4-ый элемент массива"))

let massiv = [a, b, c, d]
console.log(massiv)

function isEven(number) {
    return number% 2==0
}

let even = massiv.filter(isEven) //filter - перебирает значения массива и дальше мы выводим те, для которых значения true
console.log(even)

if (massiv.some(isEven)) { //.some-хотя бы одно значение имеет true
    alert("Вы ввели четных чисел " + even.length )
} else {
    alert("Все числа нечетные")
} 

// задание №2 
let v = Number(prompt("Введите любое число до 1000")) 

function isSimple(v) { 
    for (let i = 2; i < v; i++){
        if (v% i === 0) {
            alert("Это число не явялется простым")
            break;
    } else {
        alert("Это число простое")
    }
}
}

if (v > 1000) {
    alert("Вы ввели число больше 1000")
} else {
    isSimple(v)
} 

// задание №3

function getSumm () {
    let f = Number(prompt("Введите любое число"));
    return function() {
        let m = Number(prompt("Введите любое число"));
        let summ = f + m;
        console.log(summ);
    }
}
const result = getSumm();
result();

// задание №4
let u = Number(prompt("Введите любое число"));
let t = Number(prompt("Введите любое число"));
const getConsole = function(u, t) {
    while (u <= t) {
        console.log(u++)
    }
    while (t <= u) {
        console.log(b++)
    }
}
const intervalId = setInterval(getConsole, 1000, u, t)

setTimeout (function(){
    clearInterval(intervalId)
}, 3000) 

// задание №5
let x = Number(prompt("Введите любое число"));
let n = Number(prompt("Введите любое число"));

const getStep = (x, n) => {
    let result = x**n;
    console.log(result);
}

getStep(x, n)
