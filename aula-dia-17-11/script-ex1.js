/*

Ex. 1 -- Escreva em comentário o que você espera dessas operações:
10 + 19 + 8 * 4
(10 / 2) * 4
(2 ** 3 + 1)
17 % 5
20 % 4

*/

// Resultado esperado: 61
const result1 = 10 + 19 + 8 * 4;

// Resultado esperado: 20
const result2 = (10 / 2) * 4;

// Resultado esperado: 9
const result3 = 2 ** 3 + 1;

// resultado esperado: 2
const result4 = 17 % 5;

// resultado esperado: 0
const result5 = 20 % 4;

// Exibir no console
const results = [result1, result2, result3, result4, result5];
results.forEach((result, i) => console.log(`Resultado ${i + 1}: ${result}`));