const express = require('express');
const app = express();

const list = require('../js/data');
const bodyParser = require('body-parser');
const { JSDOM } = require('jsdom');
const fs = require('fs');

//links the css to the index page
app.use ("/css", express.static("../css"));
app.use ("/images", express.static("../images"));
app.use ("/js", express.static("../js"));

app.get('/', function (req, res) {
    let doc = 
    //res.sendFile("index.html", {root: "../"});
    fs.readFileSync('../index.html', 'utf8');
    let dom = new JSDOM(doc);
    let $ = require('jquery')(dom.window);
    
    res.send(dom.serialize());
})

console.log("in server");
 //Getting Data
app.get('/get-person', function (req, res) {
  let formatResponse = req.query['format'];
  let dataList=null;
    
    if (formatResponse == 'girl-list') {
    res.setHeader("Content-Type", "text/html");
    dataList = list.getlistOfBaes();
    res.send(dataList);
    console.log("baes");
}
})

app.use(function (req, res, next) {
  res.status(404).send("Nothing there, 404.");
})

// RUN SERVER
let port = 8000;
app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
});
