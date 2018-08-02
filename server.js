var fs = require('fs');
var express = require('express');
var app = express();
var stringfyFile = req.params.note;

app.use(bodyParser.json());

app.get('/getNote', function (req, res) {
    res.send()
});

fs.readFile('./test.json', 'utf8', function(err, data) {
    if (err) throw err;
    stringifyFile = data
    res.send(data);
});

fs.writeFile('./test.json', stringifyFile, function(err) {
    if (err) throw err;
    console.log('file updated');
});

app.post();

app.listen(3000);