
require("@babel/register");

const handlebars = require('handlebars');

const fs = require('fs');

const Router = require('koa-router');

const router = new Router();

const path = require('path');

let renderHtml = (model)=>{
  const viewPath = path.join(__dirname,'login.handlebars');
  const renderView = handlebars.compile(fs.readFileSync(viewPath, {encoding: 'utf8'}));
  return renderView(model);
}



router.get('/',async ctx=>{
  const vm = {
    Header: "Welcome to the login page."
  }
  ctx.body = renderHtml(vm);
});


module.exports = router.routes();
