module.exports = (sequelize, DataTypes) => {
  const clientAssetsTable = sequelize.define('ClientAssets', {
    clientId: { type: DataTypes.INTEGER, foreignKey: true },
    assetId: { type: DataTypes.INTEGER, foreignKey: true }
  },
  {
    timestamps: false
  });

  clientAssetsTable.associate = (models) => {
    models.Client.belongsToMany(models.Asset, {
      as: 'assets',
      through: clientAssetsTable,
      foreignKey: 'clientId',
      otherKey: 'assetId',
    });
    models.Asset.belongsToMany(models.Client, {
      as: 'clients',
      through: clientAssetsTable,
      foreignKey: 'assetId',
      otherKey: 'clientId',
    });
  };

  return clientAssetsTable;
}