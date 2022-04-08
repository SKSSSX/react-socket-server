const Koa = require('koa')
const session = require('koa-generic-session');
const redisStore = require('koa-redis');
const cors = require('@koa/cors');
const app = new Koa()
const server = require('http').Server(app.callback())
const io = require('socket.io')(server, {
  path: '/deviceInfo' // 这个很重要，是命名空间
});
const router = require("koa-router")();
const addRouters = require("./router");
const creatSocket = require('./socket');
const config = require("./config/app");

// session做加密处理
app.keys = ['keys', 'keykeys'];
app.use(session({
  key: 'mt',
  prefix: 'mtpr',
  store: new redisStore({
    // Options specified here
    host: '127.0.0.1',
    port: 6379,
    pass: '12345',
  })
}));

app.use(cors()); //设置跨域cors

// add route
addRouters(router);
app.use(router.routes()).use(router.allowedMethods());
/** 
 * socket.io
 */
creatSocket(io);

const { socketPort } = config;

// start server
server.listen(socketPort, ()=>console.log("socket server running at: http://localhost:%d", socketPort));
