var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('hostrecord', ['hostrecord']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/hostrecord', function(req, res) {
  //console.log("I recieved a GET request")

  db.hostrecord.find(function (err, docs) {
    //console.log(docs);
    res.json(docs);
  });
});

app.post('/hostrecord', function(req, res) {
  //console.log(req.body);
  db.hostrecord.insert(req.body, function(err, doc) {
    res.json(doc);
  })
});

app.delete('/hostrecord/:id', function(req, res) {
  var id = req.params.id;
  //console.log(id);
  db.hostrecord.remove({_id: mongojs.ObjectId(id)}, function(err, doc) {
    res.json(doc);
  });
});

app.get('/hostrecord/:id', function (req, res) {
  var id = req.params.id;
  //console.log(id);
  db.hostrecord.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.put('/hostrecord/:id', function (req, res) {
  var id = req.params.id;
  //console.log(req.body.host);
  db.hostrecord.findAndModify({
    query: {_id: mongojs.ObjectId(id)},
    update: {$set: {h: req.body.h, ip: req.body.ip, u: req.body.u, p: req.body.p}},
    new: true}, function (err, doc) {
      res.json(doc);
    }
  );
});

app.listen(3000);
console.log("Im listening on port 3000");
