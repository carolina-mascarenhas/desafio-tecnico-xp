'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Clients', [
      {
        id: 1,
        name: 'Carolina Santos',
      },
      {
        id: 2,
        name: 'Vinicius Tavares',
      },
      {
        id: 3,
        name: 'Isabela Silva',
      },
      {
        id: 4,
        name: 'João Pires',
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Clients', null, {});
  }
};
