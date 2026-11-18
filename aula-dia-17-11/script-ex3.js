/*

Um ano é bissexto se for divisível por 4, exceto os divisíveis por 100 — a não ser que também sejam divisíveis por 400. Peça um ano e mostre se ele é bissexto usando uma única expressão lógica. Teste com 2024, 1900 , 2000 e 2026.

*/

function calcularAnoBissexto(ano) {
    if ((ano % 400 === 0) || (ano % 4 === 0 && ano % 100 !== 0)) return `O ano ${ano} não é bissexto`

    return `O ano ${ano} é bissexto, sim.`
};

console.log(calcularAnoBissexto(2024));
console.log(calcularAnoBissexto(1900));
console.log(calcularAnoBissexto(2000));
console.log(calcularAnoBissexto(2026));

