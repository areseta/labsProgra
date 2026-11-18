'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.country, {as:"pais", foreignKey : "countryId"})
      this.belongsTo(models.director, {as:"directores", foreignKey : "directorId"})
    }
  }
  movie.init({
    title: DataTypes.STRING,
    genres: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'movie',
  });
  return movie;
};