/**
 * Test the handler
 */

const
	handler = require("./handler.js");

var 
	response = handler.handler(null,null);

console.log ("Response: '%s'", response);
