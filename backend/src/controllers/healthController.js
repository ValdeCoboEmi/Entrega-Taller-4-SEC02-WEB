function getHealth(req, res) {
  return res.json({
    status: 'success',
    message: 'El API está funcionando correctamente',
    timestamp: new Date().toISOString(),
  });
}

module.exports = { getHealth };
