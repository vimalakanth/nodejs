const express=require('express');
const cors=require('cors');
const cookieParser=require('cookie-parser');
const db=require("./app/models");
const userRoute=require('./app/routers/user.route');

const app=express();

db.sequelize.sync({force:false})
.then(()=>{
    console.log(`database created successfully`);
})

app.use('/user', userRoute);

const PORT =3010;
app.listen(PORT,()=>{

console.log(`server is running ${PORT}`);
});