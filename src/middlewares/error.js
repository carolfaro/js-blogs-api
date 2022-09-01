module.exports = (err, _req, res, __next) => {
    const { error } = console;
    error(err);
res.status(err.status || 500).json({ message: err.message || 'Erro inesperado' });
};