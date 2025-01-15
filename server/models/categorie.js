module.exports=( sequelize, DataTypes )=>{
    const Categories = sequelize.define(
        'Categories',
        {
          // Model attributes are defined here
          name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          
        },
        {
            timestamps: false
          // Other model options go here
        },
      );
      return Categories
    }
