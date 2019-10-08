'use strict';
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {

  }, {});
  Client.associate = function(models) {
    // associations can be defined here
  };
  return Client;
};