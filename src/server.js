const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000;
const server = http.createServer(app);
const mongoose = require('mongoose');

// mongoose.set('useNewUrlParser', true);
// mongoose.set('useCreateIndex', true)

server.listen(port);

