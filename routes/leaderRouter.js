const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route("/")
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res)=>{
    res.end('Will send all the leaders');
})
.post((req,res)=>{
    res.end(`Will add the leader ${req.body.name} with the detailes as ${req.body.descriptions}`);
})
.put((req,res)=>{
    res.statusCode = 403
    res.end("Operation not supported");
})
.delete((req,res)=>{
    res.end("Delete all leaders");
})

leaderRouter.route("/:leaderId")
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res)=>{
    res.end(`Will send the leader with the id ${req.params.leaderId}`);
})
.post((req,res)=>{
    res.end(`Will add the leader ${req.body.name} with the detailes as ${req.body.descriptions} to the id ${req.params.leaderId}`);
})
.put((req,res)=>{
    res.end("Will make the following changes to the leader");
})
.delete((req,res)=>{
    res.end(`Will delete the ${req.params.leaderId} leader`);
})

module.exports = leaderRouter;