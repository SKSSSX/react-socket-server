const Redis = require('koa-redis');
/* //redis 存储
const redis = require("redis"); // 引入
//链接redis
const client = redis.createClient(6379, '127.0.0.1', { auth_pass: '12345' });

const options = {client: client, db: 1}; */

const Store = new Redis().client;
class msgController {
  // 存储聊天记录
  static async storeMessages(ctx) {
    const context = ctx.request.body;
    console.log(context);
    const st = await Store.hset('fix', 'name', Math.random()); 
    ctx.body = {
      code: 0
    }
  }
}
module.exports = msgController