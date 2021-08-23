import User from '../models/User'

class UserController {
    async store(req, res){
        const userExists = await User.findOne({
            where:{
                email: req.body.email
            }
        })

        if (userExists){
            return res.status(400).json({error: 'Usuário já cadastrado'})
        }

        const user = await User.create(req.body, {
            returning: ["name", "email", "password_hash", "provider" ]
        })
        
        return res.json(user);

    }
}

export default new UserController();