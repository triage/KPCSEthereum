var express = require('express');
var compression = require('compression');
var app = express();

app.all('*', function(req, res, next) {
  if (req.headers.host.match(/^www/) !== null ) {
    res.redirect('http://' + req.headers.host.replace(/^www\./, '') + req.url);
  } else {
    next();
  }
});

app.use(compression());
app.use(express.static(__dirname + '/public'));

app.listen(8080);
console.log("Running on port 8080...");
