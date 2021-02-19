// lambda.js
'use strict'
const awsServerlessExpress = require('aws-serverless-express');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
const app = require('./app');
const server = awsServerlessExpress.createServer(app);

app.use(awsServerlessExpressMiddleware.eventContext());

exports.handler = (event, context) => { awsServerlessExpress.proxy(server, event, context) };