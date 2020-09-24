'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    UserName:{
      type:DataTypes.STRING,
      allowNull:false
    },
    UserID:{
      type:DataTypes.STRING,
      allowNull:false
    },
    UserPW: DataTypes.STRING,
    StudentNumber: DataTypes.INTEGER,
    Access: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};