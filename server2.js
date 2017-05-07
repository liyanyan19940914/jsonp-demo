const express = require('express');
const app = express();

app.get('/json-data',function (req,res) {
    res.json({name:'liyan'});
});

app.get('/jsonp-data',function (req,res) {
    res.jsonp({name:'liyan'});
});

var server = app.listen(8000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});