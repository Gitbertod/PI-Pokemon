const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Type', {
    // id: {
    //   type: DataTy,
    //   defaultValue: DataTypes.UUIDV4,
    //   primaryKey: true,
    //   unique: true
    // },
    nombre: {
      type: DataTypes.STRING,
    },

  });
};
