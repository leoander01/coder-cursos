const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const saudacao = require('./saudacaoMid');
const usuarioApi = require('./api/usuario');
require('./api/produto')(app, 'com param!');

app.post('/usuario', usuarioApi.salvar);
app.get('/usuario', usuarioApi.obter);

app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(saudacao('Dgfsdbgbdfsgodfsg'));

//use = qualquer requisição é aceita

app.use( (req, res, next) => {
    console.log('Antes..')
    next()
});

app.get('/cliente/relatorio', (req, res) => {
    res.send(`Cliente relatório: Completo ${req.query.completo}, Ano ${req.query.ano}`);
});

app.post('/corpo', (req, res) => {
    // let parte = '';
    // req.on('data', function(parte){
    //     corpo += parte;
    // });
    // req.on('end', function(){
    //     res.send(corpo)
    // });

    res.send(JSON.stringify(req.body));
});

app.get('/cliente/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`);
});

app.get('/opa', (req, res, next) => {
    console.log('Durante..');
    res.json({
        data: [
            {id: 7, name: 'Ana', position: 1},
            {id: 34, name: 'Carla', position: 2},
            {id: 74, name: 'João', position: 3}
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    });

    next()

    // res.json({
    //     name: 'iPad 32GB',
    //     price: 1899.90,
    //     discount: 0.12
    // });

    //res.send('Estou <h1>bem</h1>!<br><br><h2>Tipo é HTML</h2>');
});

app.use((req, res) => {
    console.log('Depois..')
});

app.listen(3000, () => {
    console.log('Backend executando..');
});