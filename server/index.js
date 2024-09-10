// in node, to import modules we have to use require
// modules : other code
const express = require('express'); // 
const app = express();

// controllers
// controllers are essentially callback function
const serveIndex = (req, res, next) => { // 3 parameters we can have in the controller
  res.sendFile(__dirname + '/index.html'); // response object, sending the file as a response
}// dirname finds the absolute path to the file we are asking for
// dirname will look for location in the computer : pwd
const serveHelloName = (req, res, next) => {
  const name = req.query.name || "user"
  res.send(`<h1>Hello ${name}</h1>`);
}
const serveHello = (req, res, next) => {
  res.send('hello');
}
const serveData = (req, res, next) => {
  const data = [{ name: 'ben' }, { name: 'zo' }, { name: 'carmen' }];
  res.send(data);
}
const serveApi = (req, res, next) => {
  const dataApi = [{ name: 'fiona', color: "neutrals"}, { name: 'rashell', color: "pink"}, { name: 'gonzalo', color: "-"}];
  res.send(dataApi);
}

// endpoints
// grabbing data
app.get('/', serveIndex);
app.get('/about', serveHelloName);
app.get('/api', serveApi)
app.get('/api/hello', serveHello);
app.get('/api/data', serveData);
//calling the controllers in here

// listen
const port = 8080;
// porting 
app.listen(port, () => console.log(`listening at http://localhost:${port}`)); 
//app.listen is listening to the http request
// port number is the physical computer that is acting as a server
// 8080 is one of the ports available
