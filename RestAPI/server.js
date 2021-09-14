const express=require('express');
const cors=require('cors');
const cookieParser=require('cookie-parser');
const db=require("./app/models");


const app=express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

db.sequelize.sync({force:false})
.then(()=>{
    console.log(`database created successfully`);
})

app.get('/',(req,res)=>{
    res.send("wellcome to my server");
});


const PORT =3010;
app.listen(PORT,()=>{

console.log(`server is running ${PORT}`);
});