'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Clients', [
      {
        clientId: 1,
        name: 'Carolina Santos',
        qtdComprada: 0,
        qtdVendida: 0,
        qtdAtual: 0,
        valorPago: 0,
        accountId: 1,
      },
      {
        clientId: 2,
        name: 'Vinicius Tavares',
        qtdComprada: 0,
        qtdVendida: 0,
        qtdAtual: 0,
        valorPago: 0,
        accountId: 2,
      },
      {
        clientId: 3,
        name: 'Isabela Silva',
        qtdComprada: 0,
        qtdVendida: 0,
        qtdAtual: 0,
        valorPago: 0,
        accountId: 3,
      },
      {
        clientId: 4,
        name: 'João Pires',
        qtdComprada: 0,
        qtdVendida: 0,
        qtdAtual: 0,
        valorPago: 0,
        accountId: 4,
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Clients', null, {});
  }
};