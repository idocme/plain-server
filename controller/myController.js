let express = require('express');
let router = express.Router();

let Entity = require('../models/schema/entity');


//will return the request body we recived
router.post('/', (req, res, next) => {
    console.log(req.body);    
    res.send(req.body);
});
//http://localhost:3000/entity/p2/p1 will return:
/*
{
    "p1": "p2",
    "p2": "p1"
}
*/
router.get('/:param1/:param2', (req, res, next) => {
        let param1 = req.params.param1;
        let param2 = req.params.param2;
        res.json({p1: param1, p2: param2});
});

router.get('/', (req, res, next) => {
    res.send("ok");

});




module.exports = router;
