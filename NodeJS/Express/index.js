const express = require('express'); // This code imports the express module! express is a third pary module! 
const http  = require('http'); // This code imports http which is a core module from node JS
const bodyParser = require('body-parser'); // Imports the external body-parser module
const hostname = 'localhost' // This is where will be hosting our server
const dishRouter = require('./routes/dishRouter.js') //imports the dishRouter module from the routers folder
const port = 3000; // This will be the port number
 
const app = express(); // Means that our application will be using the express module
const morgan = require('morgan') // logs important headers info in the command line
app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public')) // Serves static files automatically! __dirname is the root directory
app.use('/dishes',dishRouter);





app.use((req, res, next) => {
     res.statusCode = 200; // set the status code for the respone! 200 means OK
     res.setHeader('Content-Type', 'text/html') // set header for the response 
     res.end('<html><body><h1> This is the default page server </h1></body></html>') // Renders the page in the browser
})

const server = http.createServer(app); // Using the node http module to create a server with app as the parameter

server.listen(port, hostname,() => {   // This code determines where will be running the server!
    console.log(`Server Running at localhost:${port}`) // simple message just to let you know that the server is up and running
} )