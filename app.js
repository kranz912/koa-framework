require("@babel/register");
const glob = require('glob');
const path = require('path');
const Koa = require('koa');
const app = new Koa();
const static = require('koa-static');
const PORT = process.env.PORT || 3000;




app.use(async (ctx, next) =>{
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} -${rt}`);
})


app.use(async (ctx,next)=>{
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});


const controllers = glob.sync(path.join(__dirname,'**/*-controller.js')).map(controllerPath => require(controllerPath));
const styles = glob.sync(path.join(__dirname,'**/*.css')).map(stylepath =>  path.dirname(stylepath));


for (var style in styles) {

  if (styles.hasOwnProperty(style)) {
    app.use(static(styles[style]));
  }
}



for (var controller in controllers) {
  if (controllers.hasOwnProperty(controller)) {
    app.use(controllers[controller]);
  }
}




app.listen(PORT,()=>{
  console.log(`Server listening to ${PORT}`)

})
