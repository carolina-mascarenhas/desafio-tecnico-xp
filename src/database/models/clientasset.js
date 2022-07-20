module.exports = (sequelize, DataTypes) => {
  const clientAssetTable = sequelize.define('ClientAsset', {
    assetId: { type: DataTypes.INTEGER, foreignKey: true },
    clientId: { type: DataTypes.INTEGER, foreignKey: true }
  },
  {
    timestamps: false
  });

  clientAssetTable.associate = (models) => {
    models.Asset.belongsToMany(models.Client, {
      as: 'clients',
      through: clientAssetTable,
      foreignKey: 'assetId',
      otherKey: 'clientId',
    });
    models.Client.belongsToMany(models.Asset, {
      as: 'assets',
      through: clientAssetTable,
      foreignKey: 'clientId',
      otherKey: 'assetId',
    });
  };

  return clientAssetTable;
};