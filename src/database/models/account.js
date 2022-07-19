module.exports = (sequelize, DataTypes) => {
  const accountTable = sequelize.define('Account', {
    id: { allowNull: false, autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
    balance: { type: DataTypes.INTEGER, allowNull: false },
    deposito: { type: DataTypes.INTEGER, allowNull: false },
    saque: { type: DataTypes.INTEGER, allowNull: false }
  },
  {
    timestamps: false
  });

  accountTable.associate = (models) => {
    accountTable.hasOne(models.Client,
      { foreignKey: 'accountId', as: 'clients' }
    );
  };

  return accountTable;
}