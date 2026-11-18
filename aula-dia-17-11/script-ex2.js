/*

Exercício 2
Preveja e confira o resultado de cada uma das equações abaixo:

a) 90 > 10
b) 10 == '10'
c) 10 !== 10
d) 'ifpr' === 'IFPR'
e) 5 >= 5 &&  3 > 4
f) 5 >= 5 || 3 > 4
g) !(5 >= 5)

*/

// Resultado esperado: true
const comp1 = 90 > 10;

// Resultado esperado: true
const comp2 = 10 == '10';

// Resultado esperado: false
const comp3 = 10 !== 10;

// Resultado esperado: false
const comp4 = 'ifpr' === 'ifpr';

// Reusltado esperado: false
const comp5 = 5 >= 5 && 3 > 4;

//Resulatdo esperado: true
const comp6 = 5 >= 5 || 3 > 4;

// Resultado esperado: false
const comp7 = !(5 >= 5);

// exibir resultados
const comparacoes = [comp1, comp2, comp3, comp4, comp5, comp6, comp7];
comparacoes.forEach((comparacao, i) => {console.log(`Comparação ${i + 1}: ${comparacao}`)});
