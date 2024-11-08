const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Configuração do body-parser para processar dados dos formulários
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Servir arquivos estáticos (imagens, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota para consultar nutricionista
app.get('/consultoria-nutricional', (req, res) => {
    res.send('<h1>Consultoria Nutricional</h1><p>Agende uma consulta conosco.</p>');
});

// Rota para contato
app.post('/contato', (req, res) => {
    const { nome, email, mensagem } = req.body;
    console.log(`Mensagem recebida de ${nome} (${email}): ${mensagem}`);
    res.send('Mensagem enviada com sucesso!');
});

// Iniciar o servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
