const express = require('express')
const app = express()
const bodyParser = require('body-parser');
var cors = require('cors')

app.use(cors())

app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Hello Man')
})


app.post('/users', function (req, res) {
    console.log("post users");
    console.log(req.body);
    res.send(req.body)
})

app.get('/users', function (req, res) {
    console.log("get users");
    console.log(req.body);
    res.send(req.body)
})

app.listen(3000, () => {
    console.log("server started on port 3000");
})