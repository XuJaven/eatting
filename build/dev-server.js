const express = require('express')
var appData = require('./data.json')
var app = express()
var seller = appData.seller
var goods = appData.goods
var ratings = appData.ratings
var apiRoutes = express.Router()

apiRoutes.get('/seller', function(req, res){
  res.send({
    errno: 0,
    data: seller
  })
})
apiRoutes.get('/goods', function(req, res){
  res.send({
    errno: 0,
    data: goods
  })
})

apiRoutes.get('/ratings', function(req, res){
  res.send({
    errno: 0,
    data: ratings
  })
})
app.use('/api',apiRoutes)

const port = 8089

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


/* const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) */