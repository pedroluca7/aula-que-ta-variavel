function calcularComissao(valor, percentual) {
    let comissao = (valor * percentual) / 100;
    return comissao;
}
let comissaoRetorno;
comissaoRetorno = calcularComissao(2500, 5);

let salario = 3000;
salario = salario + comissaoRetorno;
console.log(`O salario final é de : R$ ${salario},00`);




