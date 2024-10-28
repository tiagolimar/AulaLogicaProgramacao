// Operadores lógicos

// Operador AND (&&)

// true && true = true
// true && false = false
// false && true = false
// false && false = false

console.log( 2 > 1 && 5 > 3);
console.log( 2 > 1 && 3 > 5);
console.log( 1 > 2 && 2 > 1);
console.log( 5 < 3 && 2 < 1);

// Operador OR (||)

// true || true = true
// true || false = true
// false || true = true
// false || false = false

console.log( 2 > 1 || 5 > 3);
console.log( 2 > 1 || 3 > 5);
console.log( 1 > 2 || 2 > 1);
console.log( 5 < 3 || 2 < 1);

2 > 1 && console.log('2 é maior que 1');
2 < 1 || console.log('2 é maior que 1');

// Operador NOT (!)

console.log(!true);
console.log(!false);

console.log(!(2 > 1));


// Exemplo prático - Criação de variável

let idade = 18
let eDeMaior = false;

if (!eDeMaior) {
    console.log('Acesso negado!');
}