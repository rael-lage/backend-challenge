'use strict';
module.exports = (sequelize, DataTypes) => {
  const Buyer = sequelize.define('Buyer', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.STRING
  }, {});
  Buyer.associate = function(models) {
    // associations can be defined here
  };
  return Buyer;
};