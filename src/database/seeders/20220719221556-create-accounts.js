'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Accounts', [
      {
        id: 1,
        balance: 10000,
        deposito: 0,
        saque: 0
      },
      {
        id: 2,
        balance: 9000,
        deposito: 0,
        saque: 0
      },
      {
        id: 3,
        balance: 8000,
        deposito: 0,
        saque: 0
      },
      {
        id: 4,
        balance: 7000,
        deposito: 0,
        saque: 0
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Accounts', null, {});
  }
};