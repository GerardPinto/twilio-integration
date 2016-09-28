/**
 * THE AWS Lambda function is used to list messages between two numbers with a date greater than the one provided
 */

var accountSid = '<YOUR_ACCOUNT_ID>';
var authToken = '<YOUR_AUTH_TOKEN>'; 

var twilioAPI = require('twilio-api'),
cli = new twilioAPI.Client(accountSid, authToken);
var Application = cli.account.getApplication(accountSid, function(){});
var response = {};

var messages = [];

exports.listMessageHandler = function(event, context, callback) {
	
	var parameters = new Array(3);
	parameters.push('To='+event.to);
	parameters.push('From='+event.from);
	parameters.push('DateSent>='+event.datesent);
	
	Application.listSMSMessages(parameters, function (error, list) {
		if(error)
		{
			response.status = 'error';
			response.message = error;
		} 
		else 
		{
			var SmsMessages = list.SmsMessages;
			for(var index = 0; index < SmsMessages.length; index++) 
			{
				var message = {};
				var sms = SmsMessages[index];
				message.DateSent = sms.DateSent;
				message.To = sms.To;
				message.From = sms.From;
				message.Body = sms.Body;
				message.Direction = sms.Direction;
				messages.push(message);
			}
			response.status = 'ok';
			response.message = messages;
		}
		callback(null, response);
	});
};
