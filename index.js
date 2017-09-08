var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.json())


app.post('/', function (req, res) {
  if (req.body.comment.body === 'Deploy to Production') {
    res.send('1')
  }
  console.log(req.body.comment.body)
  res.send()
})

app.listen(3000)
