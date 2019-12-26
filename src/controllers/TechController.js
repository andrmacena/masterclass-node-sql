const Tech = require('../models/Tech')
const User = require('../models/User')

module.exports = {
   async store(req, res) {

      const { user_id } = req.params
      const { name } = req.body

      const user = await User.findByPk(user_id)

      if (!user) {
         return res.status(400).json({ error: 'Usuário não existe!' })
      }

      //findOrCreate retorna a model e também um boolean dizendo se criou ou n /// criou = true, nao criou = false
      const [tech] = await Tech.findOrCreate
         ({
            where: { name }
         })

      await user.addTech(tech)

      return res.json(tech)
   },

   async getTechs(req, res) {
      const { user_id } = req.params

      const user = await User.findByPk(user_id,
         {
            include:
            {
               association: 'techs',
               //attributes: ['name'],
               through: { attributes: ['user_id'] }
            }
         })

      if (!user) {
         return res.status(400).json('Usuário não encontrado!')
      }

      return res.json(user.techs)
   },
   async delete(req, res) {
      const { user_id } = req.params
      const { name } = req.body

      const user = await User.findByPk(user_id)

      if (!user) {
         return res.status(400).json({ error: 'Usuário não existe!' })
      }

      const tech = await Tech.findOne({ where: { name } })

      await user.removeTech(tech)

      return res.status(200).send('Tecnologia removida')

   }
}
