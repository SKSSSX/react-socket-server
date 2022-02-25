const { socket } = require('./controller/socket');

module.exports = function (router) {
  router.get('/deviceInfo', socket)
};