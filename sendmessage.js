/**
 * THE AWS Lambda function is used to create and send SMS message to a number
 */

var accountSid = '<YOUR_ACCOUNT_ID>';
var authToken = '<YOUR_AUTH_TOKEN>';   

var twilio = require('twilio');
var client = new twilio.RestClient(accountSid, authToken);
var response = {};

exports.sendMessageHandler = function(event, context, callback) {
	
	client.messages.create({
		body: event.body,
		to: event.to,
		from: event.from
		}, function(err, message) {
		    if(err) {
		    	response.STATUS = 'ERROR';
			    response.MESSAGE = 'ERROR';
			    callback(null, response);
		    }
		    else {
		    	response.STATUS = 'OK';
				response.MESSAGE = '';
				callback(null, response);
		    }
		});
};
