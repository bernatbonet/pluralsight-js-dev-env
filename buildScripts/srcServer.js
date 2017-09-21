// ES5
import express from 'express';
import path from 'path';
import open from 'open';

const port = 8009;
const app = express();
/*var express = require('express');
var path = require('path');
var open = require('open');

var port = 8009;
var app = express();*/

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
