const express = require('express');
const http = require('http');
const path = require('path');
const parser = require('body-parser');

const app = express();


const server = http.createServer(app);
const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

// middlewares
app.use(express.static(publicPath));
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

app.use('/api', require('./routes'));

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});