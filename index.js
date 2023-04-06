const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const conn = require('./db/conn')

// necessario para ler o body
app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())

// modelos
const Tarefa = require('./models/Tarefa')

// rotas
const tarefasRoutes = require('./routes/tarefasRoutes')
app.use('/',tarefasRoutes)

// configuração do diretorio dos partials
const hbs = exphbs.create({
    partialsDir: ['views/partials'],
})

// definição do template egine
app.engine('handlebars',hbs.engine)
app.set('view engine','handlebars')

// configuração do diretorio com os arquivos estaticos. exemplo: css e etc
app.use(express.static('public'))

conn
.sync()
.then(() =>{
    app.listen(3000)
})
.catch((err) => console.log(err))