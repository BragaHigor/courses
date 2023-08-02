"use strict";
function showProductDetailes(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`);
    if (product.isAvailabe) {
        console.log('O produto está disponível');
    }
}
const shirt = {
    name: 'Camisa',
    price: 19.99,
    isAvailabe: true,
};
showProductDetailes(shirt);
showProductDetailes({ name: "Tênis", price: 129.99, isAvailabe: false });
function showUserDetails(user) {
    console.log(`O usuário tem o e-mail: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuário é: ${user.role}`);
    }
}
const u1 = { email: 'higorbraga@teste.com', role: "Admin" };
const u2 = { email: 'pedro@teste.com' };
showUserDetails(u1);
showUserDetails(u2);
const punto = {
    brand: 'Fiat',
    wheels: 4
};
console.log(punto);
let coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
const higor = {
    name: 'Higor',
    age: 25
};
console.log(higor);
const obito = {
    name: 'Obito',
    age: 35,
    superpowers: ['Genjutsu', ' Kamui']
};
console.log(obito);
const arnold = {
    name: 'Arnold',
    type: 'Shotgun',
    caliber: 12
};
console.log(arnold);
console.log(arnold.caliber);
//7 - readonly array
let myArray = ['Maça', 'Laranja', 'Pera', 'Uva', 'Banana'];
console.log(myArray);
myArray.forEach((item) => {
    console.log('Fruta: ' + item);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
const myNumberArray = [1, 2, 3, 4, 5];
// const myNumberArray2: fiveNumbers = [1,2,3,4,5,6]
// const mixedArray: fiveNumbers = [1, true, 'teste', 4,5]
console.log(myNumberArray);
const anotherUser = ['Higor', 25];
console.log(anotherUser[0]);
anotherUser[0] = 'Lucas';
console.log(anotherUser[0]);
// 9 - tuplas com readonly
function showNumbers(number) {
    console.log(number[0]);
    console.log(number[1]);
}
showNumbers([1, 2]);
