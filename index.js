const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const routes = require('./index1.js');
const usersRoutes = require('./handlers/users.js');

app.use('/', routes);
app.use('/users', usersRoutes);
app.use(bodyParser.json());

app.listen(port,()=>{
  console.log(`Exemple app listening at http://localhost:${port}`);
})

