const { sequelize, DataTypes } = require('sequelize');

module.exports=( sequelize, DataTypes )=>{
const Admin = sequelize.define(
    'Admin',
    {
      // Model attributes are defined here
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
    },
    {
        timestamps: false
      // Other model options go here
    },
  );
  return Admin
}

