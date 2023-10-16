const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    console.log(`${req.url}:${req.method}`);
    next()
},);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

app.get('/', (req, res) => {
    res.send('Tela inicial, não há nada aqui (:')
});

lista = [
    {
        item: 'rtx 3080',
        preco: 10000,
    },
    {
        item: 'rtx 3090',
        preco: 20000,
    },
]

// lista completa de itens

app.get('/mensagem', (req, res) => {
    res.send(
        lista
    );
});

// item específico
app.get('/mensagem/:item', (req, res) => {
   const { item } = req.params;
   const itemEncontrado = lista.find((g) => g.item == item);
   res.send(`preço: ${itemEncontrado.preco}`);
});

novo_item = {
    item: 'rtx 3100',
    preco: 20000,
}

/*app.post('/mensagem', (req, res) => {
    lista.push(novo_item);
    res.send(lista)
});*/

app.post('/mensagem', (req,res,next) =>{
    console.log('iniciando a requisição');
    next()
},
(req, res, next) => {
    lista.push(req.body);
    console.log(req.body);
    res.send(req.body)
    next()
},
() => {
    console.log('finalizando a requisição')
}

);


