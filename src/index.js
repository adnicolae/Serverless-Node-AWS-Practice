const serverless = require('serverless-http');
const app = require('./api/api');

module.exports.handler = serverless(app);