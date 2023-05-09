
// require and configure dotenv, will load vars in .env in PROCESS.ENV
require('dotenv').config();

const config = {
    port: process.env.PORT,
    mongoUri: process.env.DB_URL,
    env: process.env.NODE_ENV,
}

module.exports = config;