const express = require('express');
const bodyParser = require('body-parser');
const employeeRouter = express.Router();

employeeRouter.use(bodyParser.json());

employeeRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-type','plain/text')
    next();
})
.get((req,res,next) => {
    res.end("Get Request from employee!")
})
.post((req,res,next) => {
    res.statusCode = 403;
    res.end("POST request not supported")
})
.put((req,res,next) => {
    res.end("Employee PUT Request!")
})


employeeRouter.route('/:emp_id')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-type' , 'plain/type')
    next();
})
.get((req,res,next) => {
    res.end(`You have reached the profile of employee: ${req.params.emp_id}`)
})
.post((req,res,next) => {
    req.statusCode = 403;
    res.end('POST    method request not supported')
})

.put((req,res,next) => {
    res.end(`Employee with id: ${req.params.emp_id} was updated succesfully!`)
})




module.exports = employeeRouter;