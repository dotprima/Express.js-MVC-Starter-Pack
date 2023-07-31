const { DataTypes } = require('sequelize');
const sequelize = require('../kernel/sequelize'); // Sesuaikan path dengan lokasi file sequelize.js

const User = sequelize.define('users', {
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    NamaDepan: {
        type: DataTypes.STRING(255),
        allowNull: false,
        collate: 'utf8mb4_unicode_ci',
    },
    NamaBelakang: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci',
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
        collate: 'utf8mb4_unicode_ci',
    },
    email_verified_at: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
        collate: 'utf8mb4_unicode_ci',
    },
    TanggalLahir: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    },
    Alamat: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci',
    },
    JurusanID: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: true,
    },
    JenjangID: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: true,
    },
    NilaiRata: {
        type: DataTypes.DOUBLE(8, 2),
        allowNull: true,
    },
    PekerjaanOrtu: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci',
    },
    PendapatanOrtu: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    TahunLulus: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    Gambar: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci',
    },
    Status: {
        type: DataTypes.ENUM('aktif'),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci',
    },
    remember_token: {
        type: DataTypes.STRING(100),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci',
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
    },
});

module.exports = User;
