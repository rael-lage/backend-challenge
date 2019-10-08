'use strict';
module.exports = (sequelize, DataTypes) => {
  const Boleto = sequelize.define('Boleto', {
    number: DataTypes.BIGINT
  }, {});
  Boleto.associate = function(models) {
    // associations can be defined here
  };
  return Boleto;
};