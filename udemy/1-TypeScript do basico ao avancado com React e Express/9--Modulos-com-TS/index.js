"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 1 - importação de arquivos
const greet_js_1 = __importDefault(require("./greet.js"));
(0, greet_js_1.default)();
// 2 - import de variavel
const variable_1 = require("./variable");
console.log(variable_1.x);
// 3 - multiplas importações
const multiplas_1 = require("./multiplas");
console.log(multiplas_1.a);
console.log(multiplas_1.b);
(0, multiplas_1.myFunction)();
// 4 - alias
const changename_1 = require("./changename");
console.log(changename_1.someName);
// 5 - importando tudo
const myNumbers = __importStar(require("./numbers"));
console.log(myNumbers);
const nX = myNumbers.n1;
console.log(nX);
myNumbers.showNumber();
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const joao = new User('Joao', 25);
console.log(joao);
