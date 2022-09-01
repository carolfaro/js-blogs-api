module.exports = (err, _req, res, __next) =>
res.status(err.status || 500).json({ message: err.message || 'Erro inesperado' });