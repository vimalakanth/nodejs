
//vehicle:{id, vehi_type, status}
module.exports=(sequelize,Sequelize)=>{
    const Vehicle=sequelize.define("vehicle",{

        id:{
            type:Sequelize.INTEGER,
            allowNull:false,
            unique:true,
            primaryKey:true,
            autoIncrement:true
        },
        vehi_type:{
            type:Sequelize.ENUM('CAR', 'VAN', 'BUS'),
            defaultValue : "CAR",
            allowNull:false,
        },
      
        status:{
            type: Sequelize.ENUM ('ACTIVE', 'CONDEMED', 'GARAGE'),
            allowNull:false,
            defaultValue : "ACTIVE",
        }
    })

    return Vehicle;


}