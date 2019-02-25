var request = require('request');
var express = require('express');
var app = express();
request('https://www.zillow.com/homes/for_sale/New-Haven-CT',function(error,response,body){
	if(!error && request.statusCode == 200){
		console.log(body);
	}
});
app.listen('8080',function(){
	console.log('Connected')

});