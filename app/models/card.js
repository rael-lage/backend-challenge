'use strict';
module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define('Card', {
    holderName: DataTypes.STRING,
    number: DataTypes.INTEGER,
    expirationDate: DataTypes.DATEONLY,
    ccv: DataTypes.INTEGER
  }, {});
  Card.associate = function(models) {
    // associations can be defined here
  };
  return Card;
};