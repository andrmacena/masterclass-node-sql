const { Model, DataTypes } = require('sequelize')

class User extends Model {
   static init(connection) {
      super.init({
         name: DataTypes.STRING,
         email: DataTypes.STRING
      }, { sequelize: connection })

   }
   //criando relacionamento entre os modelos
   static associate(models) {
      this.hasMany(models.Address, { foreignKey: 'user_id', as: 'addresses' })

   }
}


module.exports = User
