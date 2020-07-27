#                                    Introduction to express! 
###                                          3rd Lesson

I'll be learning express for today since I have already learned how to create a HTTP server in vanilla NodeJS earlier today!

## 
` npm init ` --> to intialize a Node environment
` npm init -y` --> initialize a Node environment with default values
` git init` --> initialize a git environment


What I learned! 
#### REST API
#### How to create a serve instance in Node
#### How to use Express
#### How to use Express Router 
#### How to use Body-Parser


## Notes for Dependencies used in this project
- Morgan
  : displays minified request headers info in the log
- Body-Parser
  : parses the content of the request body into JSON
- Express 
  : NodeJS developmental server 
  


## Important express notes! 
`const express = require('express')` --> imports the express module for usage
`const app = express()` --> create ang express instance
`app.use()` --> method used to implement a middleware
`app.use(express.static(__dirname + '/public'))` --> serves static file from root directory
`app.all('/slugname', (req,res,next) => {})` --> when the slug indicated is visited regardless of the request method([GET,POST,PUT, etc.])
                                             --> it gets executed first!
`app.get()` --> for get requests
`app.post()` --> for post requests or addition of data to the system
`app.put()` --> used for updating existing data in the system
`app.delete()` --> used for deleting data in the system