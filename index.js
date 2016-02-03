/**
 * Sample AWS Lambda function in Nodejs to understand how to create a Lambda package
 * that has model dependencies.
 */

const 
	dotenv	= require('dotenv').load();

exports.handler = function (event, context) {
	context.succeed(process.env.HELLO);
}