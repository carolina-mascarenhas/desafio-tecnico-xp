'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Assets', [
      {
        id: 1,
        asset: 'ações',
        quantity: 100,
        value: 50
      },
      {
        id: 2,
        asset: 'títulos privados',
        quantity: 150,
        value: 150
      },
      {
        id: 3,
        asset: 'fundos de investimento',
        quantity: 250,
        value: 150
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Assets', null, {});
  }
};
