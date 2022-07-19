'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Clients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      qtdComprada: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      qtdVendida: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      qtdAtual: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      valorPago: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      accountId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Accounts',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Clients');
  }
};