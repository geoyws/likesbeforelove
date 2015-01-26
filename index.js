var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.send('Likesbeforelove by Josh Lim');
});

var server = app.listen('port', function () {
  //var host = server.address().address;
  //var port = server.address().port;
  console.log('Listening to requests...');
  //console.log('Example app listening at http://%s:%s', host, port);
});
