module.exports = (sequelize, DataTypes) => {
  const clientTable = sequelize.define('Client', {
    id: { allowNull: false, autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
    qtdComprada: { type: DataTypes.INTEGER, allowNull: false },
    qtdVendida: { type: DataTypes.INTEGER, allowNull: false },
    qtdAtual: { type: DataTypes.INTEGER, allowNull: false },
    valorPago: { type: DataTypes.INTEGER, allowNull: false }
  },
  {
    timestamps: false
  });

  clientTable.associate = (models) => {
    clientTable.belongsTo(models.Account,
      { foreignKey: 'accountId', as: 'accounts' }
    );
  };

  return clientTable;
}