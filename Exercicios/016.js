function PI() {
    return 3.1415;
}
function areaCircunferencia(raio) {
    let pi = valorPI();
    let area = pi * (2 * raio);
    console.log(`A área da circunferência é: ${area}`);
    
    
}
console.log(areaCircunferencia(10));
