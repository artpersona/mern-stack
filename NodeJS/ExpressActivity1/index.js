const express = require('express');
const morgan = require('morgan');
const http = require('http');
const app = express();
const empRouter = require('./routes/employeeRouter')
const hostname = "localhost";
const port = 3000;


app.use(morgan('dev'))
app.use(express.static(__dirname + '/public'))
app.use('/employee',empRouter)
app.use((req,res,next) => {
    res.statusCode = 404;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body<h1>Page Not Found</h1></body></html>')
});




const server = http.createServer(app);
server.listen(port, hostname, () => {
    console.log(`Server running at port: ${port}`)
})