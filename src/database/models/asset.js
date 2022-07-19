module.exports = (sequelize, DataTypes) => {
  const assetsTable = sequelize.define('Asset', {
    id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
    asset: { type: DataTypes.STRING, unique: true },
    quantity: DataTypes.INTEGER,
    value: DataTypes.INTEGER
  },
  {
    timestamps: false
  });

  return assetsTable;
}