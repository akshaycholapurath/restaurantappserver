const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route("/")
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res)=>{
    res.end('Will send all the dishes');
})
.post((req,res)=>{
    res.end(`Will add the dish ${req.body.name} with the detailes as ${req.body.descriptions}`);
})
.put((req,res)=>{
    res.statusCode = 403
    res.end("Operation not supported");
})
.delete((req,res)=>{
    res.end("Delete all dishes");
})

dishRouter.route("/:dishId")
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res)=>{
    res.end(`Will send the dish with the id ${req.params.dishId}`);
})
.post((req,res)=>{
    res.end(`Will add the dish ${req.body.name} with the detailes as ${req.body.descriptions} to the id ${req.params.dishId}`);
})
.put((req,res)=>{
    res.end("Will make the following changes to the dish");
})
.delete((req,res)=>{
    res.end(`Will delete the ${req.params.dishId} dish`);
})

module.exports = dishRouter;