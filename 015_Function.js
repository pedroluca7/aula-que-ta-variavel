function BemVindo() {
    console.log('-------------------------');
    console.log('Bem vindo á UC Backend');
    console.log('-------------------------');
}
for (let n = 1; n <= 1000; n++){
    BemVindo()
}
function Multiplicacao(n1, n2) {
    let resultado = n1 * n2;
    return resultado;

}


let numero1 = prompt('Digite o primeiro numero: ')
let numero2 = prompt('Digite o segundo numero: ')
let res = Multiplicacao(2, 7);
console.log(`O resultado é ${res}`);
console.log(Multiplicacao(5, 9));

