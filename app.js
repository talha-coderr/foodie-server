require('./app-global');
const config = require(`${__config}/config`),
    app = require(`${__config}/express`);
server = require('http').Server(app); 
require(`${__config}/dbConn`);

server.listen(`${config.port}`, () => {
    console.log(`✅Server running on port: ${config.port}`);
});