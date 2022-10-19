import { DataTypes } from 'sequelize';
import { sequelize } from '../index';
import { Video } from './Video';

export const User = sequelize.define('users', {
    id: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    user_email: DataTypes.STRING,
    user_password: DataTypes.STRING,
    user_role: DataTypes.STRING
  }, {
    timestamps: false
})

//   User.hasMany(Video, {
//     foreingKey: 'user_id',
//     sourceKey: 'id'
//   });

//   Video.belongsTo(User, {
//     foreingKey: 'user_id',
//     targetId: 'id'
//   })