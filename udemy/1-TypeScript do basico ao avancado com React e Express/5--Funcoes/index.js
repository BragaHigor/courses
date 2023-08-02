"use strict";
// 1 - void
function withoutReturn() {
    console.log("Esta função não tem retorno!");
    // return 1
}
withoutReturn();
// 2 - callback com argumento
function greeting(name) {
    return `Olá ${name}`;
}
function preGreeting(f, userName) {
    console.log('Preparando a função!');
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "Higor");
preGreeting(greeting, 'Braga');
// 3 - generic functions
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", 'b', 'c']));
function mergeObjects(objt1, objt2) {
    return {
        ...objt1,
        ...objt2
    };
}
const newObject = mergeObjects({ name: "Higor" }, { age: 25, job: "Programmer" });
console.log(newObject);
// 4 - constraints
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 3));
console.log(biggestNumber('12', "5"));
// console.log(biggestNumber("12", 5))
// 5 - especificar tipo de argumento
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [4, 6]));
console.log(mergeArrays([1, 2, 3], ['teste', "testando"]));
// 6 - parâmetros opcionais
function modernGreeting(name, greet) {
    if (greet) {
        return `Olá ${greet} ${name}, tudo bem?`;
    }
    return `Olá ${name}, tudo bem?`;
}
console.log(modernGreeting('Higor'));
console.log(modernGreeting('Higor', "Dr."));
// 7 - parametro default
function somaDefault(n, m = 10) {
    return n + m;
}
console.log(somaDefault(10));
console.log(somaDefault(15, 12));
// 8 - unknom
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === 'number') {
        console.log('X é um número');
    }
}
doSomething([1, 2, 3]);
doSomething(5);
// 9 - never
function showErrorMessage(msg) {
    throw new Error(msg);
}
// showErrorMessage('Algum erro!')
// 10 - rest operator
function sumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(5, 348, 2348));
// console.log(sumAll('teste'))
// 11 - destructuring em parâmetros
function showProductDetailes({ name, price }) {
    return `O nome do produto é ${name} e ele custa R$ ${price}`;
}
const shirt = { name: "Camisa", price: 49.99 };
console.log(showProductDetailes(shirt));
