import config from './config';
import express from 'express';
const server = express();

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    res.send('Hello Express');
});

server.listen(config.port, () => {
    console.log('Express is listening on port: ', config.port);
});