const { socket } = require('./controller/socket');

module.exports = function (router) {
  router.post('/example', socket)
};