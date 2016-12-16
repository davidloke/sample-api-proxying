var express = require('express')
var request = require('request');
 
var app = express()
 
app.get('/notes', function(req, res) {  
	request.get({ url: "https://data.gov.sg/api/action/datastore_search?resource_id=8b94f596-91fd-4545-bf9e-7a426493b674&limit=5" }, function(error, response, body) { 
              if (!error && response.statusCode == 200) { 
                  res.send(body); 
                 } 
             }); 
});

app.get('/dexsg', function(req, res) {
	request.get({ url: "http://api.dex.sg/citymapper/traveltime/?startcoord=51.559098,0.074503&endcoord=51.525246,0.084672" }, function(error, response, body) { 
              if (!error && response.statusCode == 200) { 
                  res.send(body); 
                 } 
             }); 
});


var options = {
  url: 'http://datamall2.mytransport.sg/ltaodataservice/BusArrival?BusStopID=83139&ServiceNo=15',
  headers: {
    'User-Agent': 'request',
	'AccountKey': '<ACCOUNT-KEY>',
	'UniqueUserID': '<USER-ID>'
  }
};

app.get('/ltamall', function(req, res) {
	request(options,function (error, response, body) { 
		if (!error && response.statusCode == 200) { 
			res.send(body); 
		} 
	}); 
});
 
app.listen(3000)