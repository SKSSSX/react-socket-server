const Koa = require('koa')
const cors = require('@koa/cors');
const app = new Koa()
const server = require('http').Server(app.callback())
const io = require('socket.io')(server)
const router = require("koa-router")();
const addRouters = require("./router");
const creatSocket = require("./socket");
const config = require("./config/app");

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
