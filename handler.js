/**
 * Sample AWS Lambda function in Nodejs to understand how to create a Lambda package
 * that has model dependencies.
 */

const 
	dotenv	= require('dotenv').load(),
	aws 		= require('aws-sdk');


exports.handler = function (event, context) {
	return process.env.HELLO
}