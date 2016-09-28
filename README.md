

# twilio-integration
AWS Lambda functions to send and list messages.


## Steps
1. npm install node-lambda
2. npm install twilio
3. npm install twilio-api

After which node-lambda setup, this will create context.json, deploy.env and event.json files
=> You can execute sendmessage.js with the following command
node-lambda run -H sendmessage.sendMessageHandler

=> You can execute listmessages.js with the following command
node-lambda run -H listmessages.listMessageHandler

