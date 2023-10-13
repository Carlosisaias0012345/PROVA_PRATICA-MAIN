const express = require("express");
const router = require("./routes");
const handlbars = require("express-handlebars");
const { response, request } = require("express");

require("./database/index");

const app = express();
app.use(express.json());

app.engine('handlbars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(router);

app.get('/main', (response, request) =>{
    return response.render('home')
})

app.listen(3333, console.log("Servidor está sendo executando na porta 3333"));