const {jwt,key} = require('../kernel/app');
// Middleware otentikasi JWT
const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization'); // Ambil token dari header Authorization
  if (!token) {
    return res.status(401).json({ error: 'Token tidak tersedia, otorisasi ditolak' });
  }

  try {
    const decoded = jwt.verify(token, key.jwt); // Verifikasi token dengan menggunakan secret key yang sama dengan saat pembuatan token
    req.userId = decoded.userId; // Simpan ID pengguna dalam objek req untuk digunakan dalam handler route utama
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Token tidak valid, otorisasi ditolak' });
  }
};

module.exports = authMiddleware;
