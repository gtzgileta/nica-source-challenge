import { DataTypes } from 'sequelize';
import { sequelize } from '../index';

export const Video = sequelize.define('videos', {
    user_id: DataTypes.STRING,
    title: DataTypes.STRING,
    creation_date: DataTypes.TIME,
    video_url: DataTypes.STRING,
    img_src: DataTypes.STRING,
    published: DataTypes.BOOLEAN
  }, {
    timestamps: false
});