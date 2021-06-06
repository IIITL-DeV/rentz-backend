const router = require('express').Router();

router.get('/hotel',(req,res)=>{
    res.send("hotel route working");
})

module.exports = router