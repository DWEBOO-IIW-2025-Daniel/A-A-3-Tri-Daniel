// let num = 0;
// // aula 03: operadores aritméticos

// function log() {
//     console.log(`O número agora vale ${num}`);
// }

// num = num + 5;
// log();
// num = num - 1;
// log();
// num = num * 2;
// log();
// num = num / 2;
// log();
// num = num + 1;
// log();
// num = num - 1;
// log();

// num += 5;
// log();
// num -= 1;
// log();
// num *= 2;
// log();
// num /= 2;
// log();
// num += 1;
// log();
// num -= 1;

// let mensagem = 'lista de compras';
// mensagem += ' \narrois, '
// mensagem += ' \nmeusovo, '
// mensagem += ' \npao com leite, '
// mensagem += ' \npao com ovo de leite, '
// mensagem += ' \npao de forma, '
// mensagem += ' \ndvd do joe sujo. '

// operadores logicos
// < > <= >= === == !== 

// const nota = 7;
// const aprovado = nota >= 6;
// console.log(aprovado);

// console.log(5 === '5');
// console.log(5 == '5');
// console.log(0 == '');
// console.log(0 == false);

const idade = Number(prompt('Sua idade:'));
if (idade >= 16) {
    const temTitulo = confirm('Voce possui titulo')
    if (temTitulo) {
        console.log('Voce pode votar');
    } else console.log('Nao vota')
} else {
    console.log("Nao tem idade")
}
// ternario

const tipo = idade >= 18 ? 'adulto' : 'criança';
console.log(tipo)

// switch

const opcao = prompt(' Cardapio: 1-pastel \n 2- coxinha \n 3-suco');
switch(opcao) {
    case '1':
        console.log('dez real o pastel');
        break;
    case '2':
        console.log('trinta pila');
        break;
    case '3':
        console.log('suco baratin 10 real');
        break;
    default:
        console.log('escolha algo seu burro');
}

// for
let contador = 0;
while (contador <= 20) {
    console.log(`Número vale: ${contador}`);
    contador++;
}
console.log('acabou')

// exemplo 3

for (let boa = 100; boa >= 89; boa--) {
    console.log(bla)
}

let nota;
do {
    nota = Number(prompt(`digite um numero de 1 a 10`));
} while (Number.isNaN(nota) || nota < 0 || nota > 10);
console.log(`${nota} =  numero valido`)