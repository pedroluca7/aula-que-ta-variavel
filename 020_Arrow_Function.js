function saudacao(nome) {
    console.log( `Olá, ${nome}!`);
}
saudacao('Pedro');

const saudacaoAnonima = function(nome) {
    console.log(`Olá, ${nome}!`);
}
const saudacaoArrow = (nome) => {
    console.log(`Olá, ${nome}!`);
}