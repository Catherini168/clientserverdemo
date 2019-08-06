const express = require('express');
const cors = require('cors');
const server = express();

server.use(cors());

const names = [{
	"name": "catherine"
}, {
	"name": "mona"
}, {
	"name": "dan"
}];


const favefood = [{
	"food": "burger",
	"age": 1
}, {
	"food": "fries",
	"age": 2
}, {
	"food": "noodles",
	"age": 3
}];

server.get('/getnames', (request,response) => {
    response.send(names);
});

server.get('/favefood', (request,response) => {
    response.send(favefood);
});


server.listen(3001, function(){console.log('carries has arrived')});  // ()=>{ console.log('carries has arrived')}