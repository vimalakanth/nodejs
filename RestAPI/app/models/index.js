const dbConfig=require("../config/dbconfig");
const Sequelize=require("sequelize");

const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{

    host:dbConfig.HOST,
    dialect:dbConfig.dialect,
    operatorAliases:false,
    pool:{
        max:dbConfig.pool.max,
        min:dbConfig.pool.min,
        acquire:dbConfig.pool.acquire,
        idle:dbConfig.pool.idle
    }
});

const db={};

db.Sequelize=Sequelize;
db.sequelize=sequelize;

sequelize
.authenticate()
.then(()=>{
    console.log('connection has been established');
})
.catch(err=>{
    console.log('unable to connect',err);
})


db.user=require("./user.model")(sequelize ,Sequelize);
db.role=require("./role.model")(sequelize ,Sequelize);
db.userdet=require("./userdetail.model")(sequelize ,Sequelize);
db.vehicle=require("./vehicle.model")(sequelize ,Sequelize);


module.exports=db;