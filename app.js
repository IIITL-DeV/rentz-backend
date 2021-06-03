const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const createError = require('http-errors');      
const app = express();

const  verifyAccessToken  = require('./helper/jwt_helper');

require('./db/connect');

const flatRouter =  require('./utils/routes/flat'); 
const hotelRouter =  require('./utils/routes/hotel'); 
const userRouter = require('./utils/routes/user');

app.use(express.json());
app.use('/flat',verifyAccessToken,flatRouter);
app.use(hotelRouter)
app.use(userRouter);


const port = process.env.PORT || 3000;


app.get('/',(req,res)=>{
    res.send("Hello world! I am back.😎");
})


app.use(async (req, res, next) => {
    next(createError.NotFound('this route doesnot exist'));
})

app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        },
    })
    console.log(err);
})

app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
})