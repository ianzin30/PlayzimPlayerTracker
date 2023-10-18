const { Router } = require('express');

const router = Router();

router.use((req, res, next) => {
    console.log(`Iniciando o procedimento de produtos`);
    next()
},);

lista = [
    {
        id: 1,
        item: 'rtx 3080',
        preco: 10000,
    },
    {
        id: 2,
        item: 'rtx 3090',
        preco: 20000,
    },
    {
        id: 3,
        item: 'rtx 3070',
        preco: 30000,
    },
    {
        id: 4,
        item: 'rtx 3060',
        preco: 40000,
    }
]

// lista completa de itens

router.get('/mensagem', (req, res) => {
    console.log(req.query)
    res.send(
        lista
    );
});

// item específico
router.get('/mensagem/:item', (req, res) => {
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

router.post('/mensagem', (req,res,next) =>{
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

module.exports = router;