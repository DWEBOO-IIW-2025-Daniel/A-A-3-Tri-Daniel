// console.log('Múltiplos de 7:')
// for (let n = 0; n <= 1000; n++) {
//     if (n % 7 === 0) {
//         console.log(n)
//     }
// }

// // exemplo 12 ou alguma coisa assim
// // tabuada

// for (let i = 1; i <= 10; i++) {
//     console.log('tabuada do ' + i);
//     for (let x = 1; x <= 10; x++) {
//         console.log(`${i} * ${x} = ${i * x}`);      
//     }
// };

// // exemplo 19???

// Exercicio: Crie um algoritmo para sortear um numero de 1 a 10 (inclusivos). O usuario tenta advinhar e, a cada tentativa, apresente o maior ou menor número. Ao acertar, mostre quantas tentativas ele necessitou para acertar o número. Insira uma condição onde o usuário delimita quantas chances ele terá para acertar o número.

const tentativas = prompt(`Quantas vezes tu quer jogar seu troxa`);
const jogando = true;

do {
    const numero = Math.floor(Math.random() * 10) + 1;
    for (let i = 1; i <= tentativas; i++) {
        const resposta = prompt(`Insira seu número (tentativa ${i})`);
        if (Number(resposta) === numero) {
            alert(`Boa. Acertou em ${i} tentativas.`);
            jogando = false
            break;
        } else {
            alert(`Errou.`);
        }
    }
    alert('burro nao conseguiu')

} while (jogando);