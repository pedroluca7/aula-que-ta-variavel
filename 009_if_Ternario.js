const prompt = require("prompt-sync")()

const aprovado = true;
let mensagem = "Aprovado";
//modo no if tradicional
if (aprovado == true) {
}else {
    mensagem = "Reprovado"
}

//modo ternario
mensagem = (aprovado == true) ? "Aprovado" : "Reprovado"