'use strict';

const {faker} = require('@faker-js/faker');
const bcrypt = require('bcryptjs');
module.exports = {
    /**
     * Menjalankan seeding untuk tabel "users".
     * @param {import('sequelize').QueryInterface} queryInterface
     * @param {import('sequelize')} Sequelize
     */
    async up(queryInterface, Sequelize) {
        const usersData = [];
        const totalUsers = 10; // Number of users you want to generate

        for (let i = 0; i < totalUsers; i++) {
            const salt = await bcrypt.genSalt();
            const hashPassword = await bcrypt.hash(faker.internet.password(), salt);
            const user = {
                NamaDepan: faker.person.firstName(),
                email: faker.internet.email(),
                password: hashPassword,
            };
            usersData.push(user);
        }

        // Insert the generated data into the "users" table
        await queryInterface.bulkInsert('users', usersData, {});
    },

    /**
     * Menjalankan seeding untuk menghapus data dari tabel "users".
     * @param {import('sequelize').QueryInterface} queryInterface
     * @param {import('sequelize')} Sequelize
     */
    async down(queryInterface, Sequelize) {
        // Hapus data dari tabel "users"
        await queryInterface.bulkDelete('users', null, {});
    },
};
