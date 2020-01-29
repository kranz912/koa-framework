require("@babel/register");

const handlebars = require('handlebars');

const fs = require('fs');

const Router = require('koa-router');

const router = new Router();

const path = require('path');

let renderHtml = (model)=>{
  const viewPath = path.join(__dirname,'dashboard.handlebars');
  const renderView = handlebars.compile(fs.readFileSync(viewPath, {encoding: 'utf8'}));
  return renderView(model);
}



router.get('/dashboard',async ctx=>{
  const vm = {
    post:[
      {
        title:"Study nodejs",
        content:"testbody"
      },
      {
        title:"Study Koa",
        content:"testbody2"
      },
      {
        title:"Study Mongodb",
        content:"testbody3"
      }

    ]
  }
  ctx.body = renderHtml(vm);
});


module.exports = router.routes();
