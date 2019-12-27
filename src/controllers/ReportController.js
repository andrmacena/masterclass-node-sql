const User = require('../models/User')
const { Op } = require('sequelize')

module.exports = {
   async show(req, res) {
      //Encontrar todos os usuários onde o email termima com @teste.com, que sejam da 'Rua do Brasil' ou 'Gilson Honorio Candiani' e tecnologia que começam com React

      const users = await User.findAll({
         attributes: ['name', 'email'],
         where: {
            email: {
               [Op.iLike]: '%@teste.com'
            }
         },
         include: [
            { association: 'addresses', where: { street: { [Op.or]: ['Rua do Brasil', 'Rua Gilson Honorio Candiani'] } } }, 
            {
               association: 'techs',
               required: false,
               where: {
                  name: { [Op.iLike]: 'React%' }
               }
            }
         ]
      })
      return res.json(users)
   }
}
