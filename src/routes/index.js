const express = require("express");
const helloWorld = require(`${__controller}/helloWorld`);

const router = express.Router();
require(`${__routes}/helloWorld`)(router, helloWorld);


module.exports = router;
