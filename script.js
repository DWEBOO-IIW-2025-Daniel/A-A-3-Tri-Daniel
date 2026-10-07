// const = 'naopodeatribuirdenovo';

var quantasVariaveisForamCriadas = 1000;
const whyUseVar = "?";

console.log(quantasVariaveisForamCriadas);
console.log(whyUseVar);

const texto = "pense em um texto lindo ali. 42 67";
const num = 131422;
const ativo = true;

console.log(typeof texto);
console.log(typeof num);
console.log(typeof ativo);

const aluno = 'goon';
const conceito1 = 8.5;
const conceito2 = 2.0;
const conceito3 = 5.0;

const media = (conceito1 + conceito2 + conceito3) / 3;
const resultado = media >= 7 ? "aprovado" : "chega, nao aguento mais voce. fora. suma";

const outputElement = document.querySelector('#saida');
outputElement.innerText = `o aluno ${aluno} obteve ${media.toFixed(50)} de média. ${resultado}`;