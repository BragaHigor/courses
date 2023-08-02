"use strict";
// 1 - generics
function showData(arg) {
    return `O dado é: ${arg}`;
}
console.log(showData(5));
console.log(showData('testando generic'));
// 2 - constraint em generics
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const myObj = { name: 'Porta', cor: 'Branca' };
const otherProduct = { name: 'Carro', wheels: 4, engine: 1.0 };
// const thirdObj = {price: 19.9, category: "Roupa"}
console.log(showProductName(myObj));
console.log(showProductName(otherProduct));
const myCar = { name: 'Punto', wheels: 4, engine: 1.4, color: 'Branco' };
const myPen = { name: 'Caneta BIC', wheels: false, engine: false, color: 'Azul' };
console.log(myCar);
console.log(myPen);
// 4 - type parameters
function getSomeKey(obj, key) {
    // return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`
    return `A chave está presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
    hd: '2TB',
    ram: '32GB'
};
console.log(getSomeKey(server, 'hd'));
function showCharName(obj, key) {
    return `${obj[key]}`;
}
const myChar = {
    name: "Higor",
    age: 25,
    hasDriveLicense: true
};
console.log(showCharName(myChar, 'name'));
console.log(showCharName(myChar, 'age'));
console.log(showCharName(myChar, 'hasDriveLicense'));
// 6 - typeof type operator
const userName = 'Higor';
const userName2 = 'Lucas';
const userName4 = 'Artur';
console.log(userName);
const newTruck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão para pouca carga"
};
function showKm(km) {
    console.log(`O veiculo tem a km de: ${km}`);
}
showKm(newTruck.km);
const newCar = {
    km: 5000,
    kg: 1000,
};
showKm(newCar.km);
const someVar = 5;
const testing = 'soma text';
