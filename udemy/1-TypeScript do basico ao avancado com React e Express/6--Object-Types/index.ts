// 1 - tipo de objeto para função como interface
interface Product{
    name: string
    price: number
    isAvailabe: boolean
}

function showProductDetailes(product: Product){
    
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`)
    if(product.isAvailabe){
        console.log('O produto está disponível')
    }
}   

const shirt: Product = {
    name: 'Camisa',
    price: 19.99,
    isAvailabe: true,
}

showProductDetailes(shirt)
showProductDetailes({name: "Tênis", price: 129.99, isAvailabe: false})


// 2 - propriedade opcional em interface
interface User{
    email: string,
    role?: string,
}

function showUserDetails(user: User) {
    console.log(`O usuário tem o e-mail: ${user.email}`)
    if(user.role){
        console.log(`A função do usuário é: ${user.role}`)
    }
}

const u1:User = {email: 'higorbraga@teste.com', role: "Admin"}
const u2:User = {email: 'pedro@teste.com'}

showUserDetails(u1)
showUserDetails(u2)

// 3 - readonly
interface Car {
    brand: string
    readonly wheels: number
}

const punto: Car = {
    brand: 'Fiat',
    wheels: 4
}

console.log(punto)

// punto.wheels = 5


// 4 - index signature
interface CoordObject{
    [index: string]: number
}

let coords: CoordObject = {
    x: 10
}

coords.y = 15

console.log(coords)


// 5 - extending interface
interface Human {
    name: string,
    age: number
}

interface SuperHuman extends Human {
    superpowers: string[]

}

const higor: Human = {
    name: 'Higor',
    age: 25
}

console.log(higor)

const obito: SuperHuman = {
    name: 'Obito',
    age: 35,
    superpowers: ['Genjutsu', ' Kamui']
}

console.log(obito)


// 6 - intersection types
interface Character {
    name: string
}

interface Gun {
    type: string,
    caliber: number
}

type HumanWithGun = Character & Gun

const arnold: HumanWithGun = {
    name: 'Arnold',
    type: 'Shotgun',
    caliber: 12
}

console.log(arnold)

console.log(arnold.caliber)


//7 - readonly array
let myArray: ReadonlyArray<string> = ['Maça', 'Laranja', 'Pera', 'Uva', 'Banana']

console.log(myArray)

myArray.forEach((item) => {
    console.log('Fruta: ' + item)
})

myArray = myArray.map((item) => {
    return `Fruta: ${item}`
})

console.log(myArray)


// 8 - tuplas
type fiveNumbers = [number, number, number, number, number]

const myNumberArray: fiveNumbers = [1,2,3,4,5]
// const myNumberArray2: fiveNumbers = [1,2,3,4,5,6]
// const mixedArray: fiveNumbers = [1, true, 'teste', 4,5]

console.log(myNumberArray)

type nameAndAge = [string, number]

const anotherUser = ['Higor', 25]

console.log(anotherUser[0])

anotherUser[0] = 'Lucas'

console.log(anotherUser[0])


// 9 - tuplas com readonly
function showNumbers(number: readonly [number, number]){
    console.log(number[0])
    console.log(number[1])
}

showNumbers([1,2])