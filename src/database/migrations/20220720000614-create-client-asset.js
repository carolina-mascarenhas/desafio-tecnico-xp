'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ClientAssets', {
      assetId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Assets',
          key: 'assetId',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      clientId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Clients',
          key: 'clientId',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
    });
  },
  
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ClientAssets');
  }
};