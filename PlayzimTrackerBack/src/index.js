const express = require('express');
const mongoose = require('mongoose');
const app = express();
const produtosRouter = require('./routes/produtos');

const port = 3000;
mongoose.connect('mongodb://127.0.0.1:27017/PlayzimTracker')
.then(() => {
    console.log('Conectado ao banco de dados')
}
).catch((err) => {
    console.log(err);
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log(`rota acionada: ${req.url}/ método acionado --> ${req.method}`);
    next()
},);

app.use('/aprendizado',produtosRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

app.get('/', (req, res) => {
    res.send('Tela inicial, não há nada aqui (:')
});



