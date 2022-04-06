// import {msgController} from './controllers/messages';
const msgController = require('./controllers/messages');
module.exports = function (router) {
  router.post('/api/message/save', msgController.storeMessages);
};