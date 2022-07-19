'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ClientAssets', [
      {
        clientId: 1,
        assetId: 3,
      },
      {
        clientId: 2,
        assetId: 3,
      },
      {
        clientId: 3,
        assetId: 1
      },
      {
        clientId: 4,
        assetId: 2
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ClientAssets', null, {});
  }
};