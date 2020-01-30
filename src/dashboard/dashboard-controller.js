require("@babel/register")
const Controller= require('../../base/Controller');

const Router = require('koa-router');

const router = new Router();

class Dashboard extends Controller{

  constructor() {
    super();
    router.get('/dashboard', this.index);
   }

  async Index(ctx){
    ctx.body = "dashboard"
  }


}
console.log(Dashboard.index)
module.exports = router.routes();
