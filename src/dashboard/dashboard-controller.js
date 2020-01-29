require("@babel/register");
const Controller= require('../../base/Controller');
const Router = require('koa-router');
const router = new this.Router();
class Dashboard extends Controller{

  constructor() {
    super();
  }
  router.get('/dashboar',async ctx=>{
    ctx.body ='dahsboard';
  });


}

const dash = new Dashboard()
module.exports = dash.router.routes();
