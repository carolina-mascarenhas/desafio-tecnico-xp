module.exports = (sequelize, DataTypes) => {
  const assetTable = sequelize.define('Asset', {
    assetId: { allowNull: false, autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
    asset: { type: DataTypes.STRING, allowNull: false, unique: true },
    quantity: { type: DataTypes.INTEGER, allowNull: false },
    value: { type: DataTypes.INTEGER, allowNull: false }
  },
  {
    timestamps: false
  });

  return assetTable;
}