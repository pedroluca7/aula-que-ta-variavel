function saudacao(nome) {
    console.log( `Olá, ${nome}!`);
}
saudacao('Pedro');

const saudacaoAnonima = function(nome) {
    console.log(`Olá, ${nome}!`);
}
saudacaoAnonima('Pablo');


function soma(v1, v2) {
    console.log(v1 + v2);
}
soma(2, 3);
const somaAnonima = function(v1, v2) {
    console.log(v1 + v2);
}
somaAnonima(5, 7);