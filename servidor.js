var http = require('http');
//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  console.log("entraste al servidor");
  res.end(); //end the response
}).listen(3000); //the server object listens on port 8080
