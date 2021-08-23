import Sequelize, { DataTypes, Model} from 'Sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
    static init(sequelize){
        super.init({
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            password: DataTypes.VIRTUAL,
            password_hash: Sequelize.STRING,
            provider: Sequelize.BOOLEAN,
        },
        {
            sequelize,

        });

        this.addHook('beforeSave', async (instance, options) => {
            if (instance.password){
                let result = await bcrypt.hash(instance.password, 10)
                instance.password_hash = result
            }
        })
        return this;
    } 
    checkPassword(password){
        return bcrypt.compare(password, this.password_hash)
    }
}

export default User;