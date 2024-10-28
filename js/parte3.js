// Variáveis

// 1. Tipos de declaração de variável

var variavel1; // não usual
let variavel2;
const variavel3 = 3;

console.log(variavel3);
console.log(variavel1);

variavel1 = 1;

console.log(variavel1);

variavel2 = 2;

console.log(variavel2);

// variavel3 = 4; // erro

variavel2 = 4;

console.log(variavel2);

// 2. Tipos de variáveis

let nome = 'João';

console.log(typeof nome);

let idade = 18;

console.log(typeof idade);

let eDeMaior = idade >= 18;

console.log(eDeMaior);
console.log(typeof eDeMaior);

let preco = 19.90;

console.log(typeof preco);

// Regras de nomenclatura de variáveis

// 1. Não pode ter espaços entre palavras
// let nome completo = 'João'; // erro

// 2. Padrões de nomenclatura
// Snake case
let nome_completo = 'João'; // erro

// Camel case
let nomeCompleto = 'João';

// Pascal case
let NomeCompleto = 'João';

// 3. Não pode começar com números

// let 1nome = 'João'; // erro
let nome1 = 'João';

// 4. Não pode/deve conter caracteres especiais

// ! @ # $ % & * ( ) _ + = - { } [ ] | \ / : ; " ' < > , . ?

// let nome$ = 'João';


// 5. Não pode ser uma palavra reservada

// let let = 2; // erro

// function, if, else, while, for, do, switch, case, break, continue, return, true, false, null, undefined, NaN, Infinity