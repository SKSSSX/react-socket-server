/*
 * @Author: SKSSSX 1270256946@qq.com
 * @Date: 2022-07-24 17:20:14
 * @LastEditors: SKSSSX 1270256946@qq.com
 * @LastEditTime: 2022-07-24 17:27:52
 * @FilePath: /react-socket-server/app/app.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const Koa = require('koa')
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
