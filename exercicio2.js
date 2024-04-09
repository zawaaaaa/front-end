const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

function encontrarMaiorMenor(vetor) {
let maior = vetor[0];
let menor = vetor[0];

vetor.forEach(elemento => {
if (elemento > maior) {
maior = elemento;
} else if (elemento < menor) {
menor = elemento;
}
});

return { maior, menor };
}

rl.question('Digite 10 números separados por espaço: ', (input) => {
const vetor = input.split(' ').map(Number);

const { maior, menor } = encontrarMaiorMenor(vetor);

console.log(`O maior elemento do vetor é: ${maior}`);
console.log(`O menor elemento do vetor é: ${menor}`);

rl.close();
});