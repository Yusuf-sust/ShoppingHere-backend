const initMongo = require('./src/db/mongoose')
const app = require('./config/express')
const config = require('./config/config');

initMongo(config.mongoUri).then( async () => {
    if(!module.parent) {
        // listen on port config.port
        app.listen(config.port, () => {
        console.info(`server started on port ${config.port} (${config.env})`);
      });
    }
});

module.exports = app;