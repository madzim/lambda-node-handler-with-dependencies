# lambda-node-handler-with-dependencies

A sample for creating AWS Lambda NodeJS handlers that require external dependencies.

This project uses returns the value of the environment variable `HELLO`. The value 
is defined in the `.env` file. The file is read using the `dotenv` NPM module.

The value is returned via the Lambda context object. 

## Quick Start
This section helps you just get this project into AWS Lambda and run it.

These steps assume you've already cloned the project locally.

1. Init the project

	```
	npm install
	```

2. Copy sample.env to .env

	```
	cp sample.env .env
	```

3. Build the package.
	This basically involves packaging the relevant files into a `package.zip` file.

    You can use the provided npm script:

	```
	npm start package
	```

    Or run this zip command in a terminal window:

    ```
    zip -r -q package.zip index.js .env node_modules/*
    ```

4. Connect to AWS Lambda

5. Create a new Lambda function
	If you don't have existing Lamdba functions defined, click *Get Start New* on the AWS Lambda launch screen.
	If you do have an existing Lamdba function, click ** on the ....

	1. The first step is to select a blueprint.
	2. Search for "node".
	3. Select the "hello-world" start AWS Lambda function project.

6. Configure the function
	1. Provide a Name for the function. For example "myHandler".
	2. Under the Lambda function code section, selec the "Upload a .ZIP file" option.
	3. Click the *Upload* button and upload the `package.zip` file create above.
	4. Leave the Handler as index.handler. This tells Lambda to run the `exports.handler` function defined in the `index.js` file.
	5. Under *Role*, select 'lambda_basic_execution'.
	6. Leave the other settings as default values.
	7. Click *Next*.

7. On the Review screen, validate the settings then click *Create Function*
	You should then get to the *myHandler* function page.
	You should also see the message "Congratulations! Your Lambda function "myHandler" has been successfully created."

8. To test the function, click *Test*
	This will open the "Input test event" dialog box. In the future, you can provide any kind of data you want in here to test yoru function.
	This example does not use any of these values, so you can ignore them and just click *Save and test*

9. Review results
	After a few seconds, the function should run. The output appears below the tabs. Look for "Execution result: succeeded (Logs)".
	In this section, you should see the text
		"Hello, World!"

## How it works
The app simply returns an environment variable that is defined in the file `.env` which is read by the npm module, dotenv.

### .env
```
HELLO=Hello, World!
```

### index.js
The lamdba function is found in `index.js`.

```
const 
    dotenv  = require('dotenv').load();

exports.handler = function (event, context) {
    context.succeed(process.env.HELLO);
}
```

When configuring the AWS Lambda function, you told it that the lambda function was "index.handler".

`index` matched to the file `index.js`
`handler` matched to the `exports.handler` in `index.js`.


