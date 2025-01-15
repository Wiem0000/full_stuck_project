
const { sequelize, DataTypes } = require('sequelize');

module.exports=(sequelize, DataTypes)=>{
const Products = sequelize.define(
  'Products',
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    
  
    // Other model options go here
  },
  {
    timestamps: false 
  }
)
return Products
}