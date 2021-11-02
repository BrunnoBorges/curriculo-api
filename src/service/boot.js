const app = require('@app');
const config = require('@config');


module.exports = (err) => {
    console.clear();
    if(err) {
        console.log(err, 'erro ao conectar no banco de dados')
    }
    app.listen(config.app.port, (err) => {
        if(err) {
            return console.log('erro')
        }
        console.log(`iniciou em localhost:${config.app.port}`)
    });
}