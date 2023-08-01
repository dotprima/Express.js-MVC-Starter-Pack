const { jwt, key } = require('../kernel/app');
// Middleware otentikasi JWT
const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization'); // Ambil token dari header Authorization
    if (!token) {
        return res.status(401).json({ error: 'Token tidak tersedia, otorisasi ditolak' });
    }

    try {
        const decoded = jwt.verify(token, key.jwt);
        req.userId = decoded.userId;
        return next();
    } catch (error) {
        return res.status(401).json({ error: 'Token tidak valid, otorisasi ditolak' });
    }
};

module.exports = authMiddleware;
