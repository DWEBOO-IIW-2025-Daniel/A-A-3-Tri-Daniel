const nome = "daniel";
const cidade = "assis chateaubriand";
const anoNascimento = '2010';

const anoAtual = new Date().getFullYear();

const idade = anoAtual - anoNascimento;

const mensagem = `O aluno ${nome}, em ${cidade}, nasceu em ${anoNascimento} logo tem ${idade} anos... scuba`;

const elemento = document.createElement('p');
document.body.appendChild(elemento);

elemento.innerText = mensagem;
console.log(mensagem);