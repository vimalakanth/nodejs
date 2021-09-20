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
db.userdetail=require("./userdetail.model")(sequelize ,Sequelize);
db.vehicle=require("./vehicle.model")(sequelize ,Sequelize);

db.user.belongsToMany (db.role,{
    through : "user_role",
    as : "roles",
    foreignkey : "role_id",
});


db.role.belongsToMany (db.user,{
    through : "user_role",
    as : "users",
    foreignkey : "user_id",
});

db.user.hasMany (db.vehicle);
db.vehicle.belongsTo(db.user);

db.user.hasOne(db.userdetail, {});
db.userdetail.belongsTo(db.user);

module.exports=db;