const express = require("express")
const cors = require("cors")
const mysql = require("mysql")

const app = express()
app.use(cors())

const conexaoDB = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'livrocaixa'
})


app.get('/livrocaixa/lancamentos', ((req, res) => {
    let string = "SELECT * FROM lancamentos"
    conexaoDB.query(string, (err, result) => {
        if(err == null){
            res.json((result))
        }
    })
}))

app.get('/livrocaixa/lancamentos/datas', ((req, res) => {
    let string = "SELECT data_lancamento FROM lancamentos"
    conexaoDB.query(string, (err, result) => {
        if(err == null){
            res.json((result))
        }
    })
}))

app.get('/livrocaixa/lancamentos/debitos', ((req, res) => {
    let string = 'SELECT * FROM lancamentos WHERE tipo = "D"'
    conexaoDB.query(string, (err, result) => {
        if(err == null){
            res.json((result))
        }
    })
}))

app.get('/livrocaixa/lancamentos/creditos', ((req, res) => {
    let string = 'SELECT * FROM lancamentos WHERE tipo = "C"'
    conexaoDB.query(string, (err, result) => {
        if(err == null){
            res.json((result))
        }
    })
}))

app.post('/livrocaixa/lancamentos', (req, res) => {
    let data = new Date()
    let query = `INSERT INTO lancamentos VALUES (DEFAULT, '${(data.getFullYear() + "-" + ((data.getMonth() + 1)) + "-" + (data.getDate() ))}', '${req.body.descricao}', ${req.body.valor}, '${req.body.tipo}')`;
    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(201).json(req.body).end()
        }else {
            res.status(400).json(err).end()
        }
    })
}
)


app.listen(3000, () => {
    console.log("Respondendo na porta 3000")
})