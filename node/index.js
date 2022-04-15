const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)
const sql = `insert into people(name) values ('Raphael')`


app.get('/', (req, res) => {
    connection.query(sql)

    fMontaHtml(res);
});

async function fMontaHtml(res) {
    var sHtml = '<h1>Full Cycle Rocks !</h1>'
    connection.query("SELECT id, name FROM people", (err, result, fields) => {

        var stabela = ''
        if (result != undefined) {
            stabela += `<table>
                        <tr>
                            <th>Codigo</th>
                            <th>Nome</th>
                        </tr>`

            for (let i = 0; i < result.length; i++) {
                // console.log("Codigo: " + result[i].id + " Nome: " + result[i].name)
                stabela +=
                    `<tr>
                            <td>${result[i].id}</td>
                            <td>${result[i].name}</td>
                        </tr>`
            }
            stabela += '</table>'
        } else {
            stabela += '<p style="color:red;">Nenhum registro encontrado!</p>'
        }
        // console.log(stabela)
        sHtml += stabela
        res.send(sHtml)
    });
}

app.listen(port, () => {
    console.log('Rodando na porta' + port)
})