'use strict';

module.exports = {
    /**
     * Menjalankan migrasi untuk membuat tabel "users".
     * @param {import('sequelize').QueryInterface} queryInterface
     * @param {import('sequelize')} Sequelize
     */
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('users', {
            id: {
                type: Sequelize.BIGINT.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
            },
            NamaDepan: {
                type: Sequelize.STRING(255),
                allowNull: false,
                collate: 'utf8mb4_unicode_ci',
            },
            NamaBelakang: {
                type: Sequelize.STRING(255),
                allowNull: true,
                collate: 'utf8mb4_unicode_ci',
            },
            email: {
                type: Sequelize.STRING(255),
                allowNull: false,
                unique: true,
                collate: 'utf8mb4_unicode_ci',
            },
            email_verified_at: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            password: {
                type: Sequelize.STRING(255),
                allowNull: false,
                collate: 'utf8mb4_unicode_ci',
            },
            TanggalLahir: {
                type: Sequelize.DATEONLY,
                allowNull: true,
            },
            Alamat: {
                type: Sequelize.STRING(255),
                allowNull: true,
                collate: 'utf8mb4_unicode_ci',
            },
            JurusanID: {
                type: Sequelize.BIGINT.UNSIGNED,
                allowNull: true,
            },
            JenjangID: {
                type: Sequelize.BIGINT.UNSIGNED,
                allowNull: true,
            },
            NilaiRata: {
                type: Sequelize.DOUBLE(8, 2),
                allowNull: true,
            },
            PekerjaanOrtu: {
                type: Sequelize.STRING(255),
                allowNull: true,
                collate: 'utf8mb4_unicode_ci',
            },
            PendapatanOrtu: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            TahunLulus: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            Gambar: {
                type: Sequelize.STRING(255),
                allowNull: true,
                collate: 'utf8mb4_unicode_ci',
            },
            Status: {
                type: Sequelize.ENUM('aktif'),
                allowNull: true,
                collate: 'utf8mb4_unicode_ci',
            },
            remember_token: {
                type: Sequelize.STRING(100),
                allowNull: true,
                collate: 'utf8mb4_unicode_ci',
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: true,
            },
        });

       
    },

    /**
     * Menjalankan migrasi untuk menghapus tabel "users".
     * @param {import('sequelize').QueryInterface} queryInterface
     * @param {import('sequelize')} Sequelize
     */
    async down(queryInterface, Sequelize) {
    
        // Hapus tabel "users"
        await queryInterface.dropTable('users');
    },
};
