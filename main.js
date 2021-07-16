const express = require("express");
const dotenv = require("dotenv");

const usersRouter = require('./Routers/users.Route');

//initialize 
const app = express();
dotenv.config();

app.get('/',(req,res)=>{
res.status(200).send(`use
GET http://localhost:${process.env.PORT || 3000}/user
POST http://localhost:${process.env.PORT || 3000}/user
PATCH http://localhost:${process.env.PORT || 3000}/user/300
DELETE http://localhost:${process.env.PORT || 3000}/user/300`);
});
app.use('/user',usersRouter);

app.listen(process.env.PORT || 3000, () => {
    console.log("server running");
});