const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route("/")
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res)=>{
    res.end('Will send all the promotions');
})
.post((req,res)=>{
    res.end(`Will add the promotion ${req.body.name} with the detailes as ${req.body.descriptions}`);
})
.put((req,res)=>{
    res.statusCode = 403
    res.end("Operation not supported");
})
.delete((req,res)=>{
    res.end("Delete all promotions");
})

promoRouter.route("/:promoId")
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res)=>{
    res.end(`Will send the promotion with the id ${req.params.promoId}`);
})
.post((req,res)=>{
    res.end(`Will add the promotion ${req.body.name} with the detailes as ${req.body.descriptions} to the id ${req.params.promoId}`);
})
.put((req,res)=>{
    res.end("Will make the following changes to the promotion");
})
.delete((req,res)=>{
    res.end(`Will delete the ${req.params.promoId} promotion`);
})

module.exports = promoRouter;