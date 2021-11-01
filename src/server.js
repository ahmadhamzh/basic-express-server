'use strict'
const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT;
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const pageNotFound = require('./erroe-handeler/404');
const errorHandeler = require('./erroe-handeler/500')



app.use(logger)
app.get('/',(req,res)=>{
    res.status(200).send('home working fine')
})

app.get('/person', validator, (req, res)=>{    
        res.status(200).send({
            name:req.query.name
        })
        console.log(req.query);  
    })


app.use('*',pageNotFound)
app.use(errorHandeler)

function start() {
    app.listen(PORT, ()=>{
        console.log(`listning to ${PORT}`);
    })
    
}

module.exports = {
    app,
    start
}