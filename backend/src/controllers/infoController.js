const infoService = require('../services/infoService');

function getInfo(req, res, next) {
  try {
    return res.json({
      status: 'success',
      message: 'El API está funcionando',
      data: infoService.getIntegrantes(),
    });
  } catch (error) {
    return next(error);
  }
}

module.exports = { getInfo };
