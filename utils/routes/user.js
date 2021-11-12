const router = require('express').Router();
const User = require('../../db/models/User')

router.get('/user',async (req,res)=>{
    try{
        const users = await User.getAllUsers();
        res.status(200).send({users});
    }
    catch(e){
        res.status(400).send({e})
    }
})

router.get('/user/:id',async (req,res)=>{
    const id = req.params.id;
    try{
        const user = await User.getUser(id);
        res.status(200).send({user});
    }
    catch(e){
        res.status(400).send();
    }
})

router.post('/user/add',async (req,res)=>{
    const user = new User(req.body);

    try{
        let result = await user.save();
        res.status(201).send(result);
    }
    catch(e)
    {
        res.status(400).send();
    }

})

module.exports = router