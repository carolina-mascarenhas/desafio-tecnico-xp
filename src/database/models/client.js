module.exports = (sequelize, DataTypes) => {
  const clientTable = sequelize.define('Client', {
    id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
    name: { type: DataTypes.STRING, unique: true }
  },
  {
    timestamps: false
  });

  return clientTable;
}