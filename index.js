const express = require('express')
const router = require('./router/router')
const express_handlebars = require('express-handlebars')

const app = express()
const port = 3000

app.use('/', router);
app.engine('handlebars', express_handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// app.use('/static', express.static('static'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})