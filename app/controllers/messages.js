//redis 存储
const redis = require("redis"); // 引入
//链接redis
const client = redis.createClient(6379, '127.0.0.1', { auth_pass: '12345' });
class msgController {
  // 存储聊天记录
  static async storeMessages(ctx) {
    const context = ctx.request.body;
    console.log(context);
    client.set('stringKey', 'stringValue'); 
  }
}
module.exports = msgController