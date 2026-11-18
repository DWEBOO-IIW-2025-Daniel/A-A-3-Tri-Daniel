// exercicio 4
/*

Calcule a média de três notas lidas com prompt e mostre-a arredondada para uma casa decimal.

*/

let soma = 0;
const quantidade = 3;

for (let i = 0; i < quantidade; i++) {
    const input = prompt(`Digite a nota ${i + 1}`);
    soma += Number(input);
}

const media = soma / quantidade;
console.log(media);
alert(`Cuidado sua média é ${media} ui u ui u ui u`)