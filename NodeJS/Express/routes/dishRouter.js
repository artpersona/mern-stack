const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all( (req,res,next) => { // when using app.all this URL will be executed first regardless of its request method! 
    res.statusCode = 200;
    res.setHeader('Content-type','text/plain')
    next(); // this co++\// when calling th\meters will also be implemented on the next method
})
.get((req,res,next) => {
    res.end('See this shit?')
})
.post((req,res,next) => {
    res.end(`Will add this dishes ${req.body.name} :  ${req.body.description}`)
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end(`PUT Operation not supported`)
})
.delete((req,res,next) => {
    res.end('See this shit?')
});

module.exports = dishRouter;