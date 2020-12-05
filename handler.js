/*'use strict';

module.exports.hello = (event,context,callback) => {
 const response={
 
    statusCode: 200,
    body: JSON.stringify({
        message: 'Hello!',
        input: event,
      }),
  };
    return callback(null,response);
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};*/

const awsServerlessExpress = require('aws-serverless-express');
const app = require('./src/index');

const server = awsServerlessExpress.createServer(app);

exports.handler = (event, context) => {
  return awsServerlessExpress.proxy(server, event, context);
}
