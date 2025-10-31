require('dotenv').config();
const _ = require('underscore');
process.env.NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

process.on("uncaughtException", (err) => {
    console.error("[Config]", err);
});

// give priority to core.js (env) over environment json
module.exports = _.extend(require(`./env/${process.env.NODE_ENV}`), require('./env/core'));

console.log(`------------------${process.env.NODE_ENV} environment---------------------`);
