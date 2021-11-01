'use strict'

function validator(req, res, next) {
    if (req.query.name) {
        next()
        console.log(res.status);
    } else {
        res.status(500).send({
            error : 500,
            message :'you didint enter a name'
        })
        console.log(res.status);
        
    }   
};

module.exports = validator