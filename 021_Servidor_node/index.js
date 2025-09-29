//criando constante para recebeber o modulo express
const express = require('express');
//criando uma aplicação express
const app = express();

//rota principal
const Pgprincipal =  
app.get('/', (req, res) => { 
    res.send('<h1>Bem vindo ao meu servidor node.js!</h1>')
})
app.get('/sobre', (req, res) => {
    res.send('<h1>Pagina</h1><p>Criei pagina sobre o sobre</p>')
})

const usuarios = ['Pedro', 'Ana', 'Maria', 'João'];
app.get('/usuarios', (req, res) => {
   let html = '<h1>Lista de Usuários:</h1>';
   html += '<ul>'; // html = html + '<ul>'
   for (let usuarioAtual of usuarios) {
       html += `<li>${usuarioAtual}</li>`
   }
    html += '</ul>';
    res.send(html);


})
app.get('/usuario/:id', (req, res) => {
    const id = req.params.id;
    const usuarioSel = usuarios[id];
    if (usuarioSel === undefined) {
        res.send ('Usuário não encontrado!')

    }else{
 res.send(`Você esta visualizando o perfil do id ${id} seu nome é ${usuarioSel}`);
}

   
})

app.get('/soma/:n1/:n2', (req, res) => {
  const n1 = Number (req.params.n1);
    const n2 = Number (req.params.n2);
    const resultado = n1 + n2;
    res.send(` ${n1} + ${n2} é igual a ${resultado}`);
})

app.get('/menu', (req, res) => {
 let html = `
 <h1>Menu</h1>
 <a heref="/">Principal</a> <br>
 <a heref="/sobre">Sobre</a> <br>
 <a heref="/usuarios">Usuarios</a> <br>
 <a heref="/usuarios/1">Usuario1</a> <br>
 <a heref="/usuario/7">Usuario invalido</a> <br>
 <a heref="/soma/10/5">Soma</a> <br>
`;
res.send(html);
})



const porta = 3000;
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});
