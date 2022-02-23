const Koa = require('koa')
const app = new Koa()
const server = require('http').Server(app.callback())
const io = require('socket.io')(server)
const router = require("koa-router")();
const addRouters = require("./router");
const addSocket = require("./socket");
const config = require("./config/app");

// add route
addRouters(router);
app.use(router.routes()).use(router.allowedMethods());
/**
 * socket.io
 */
addSocket(io);

const { socketPort } = config;

// start server
server.listen(socketPort, ()=>console.log("socket server running at: http://localhost:%d", socketPort));
