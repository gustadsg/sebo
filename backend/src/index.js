const express = require('express'); //serve para criar rotas
const cors = require('cors'); //serve para requisições seguras e transferências de dados
const routes = require('./routes'); //rotas do sistema

const port = process.env.PORT || 3333;

const app = express();

app.use(cors());
app.use(express.json()); //serve para poder interpretar json

app.use(routes);

app.listen(port, ()=>{
    console.log(`server listening on port ${port}`)
})