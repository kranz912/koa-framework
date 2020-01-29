require("@babel/register");

class Controller {

  constructor() {
    this.handlebars = require('handlebars');
    this.fs = require('fs');
    this.Router = require('koa-router');
    this.router = new this.Router();
    this.path = require('path');
  }
  renderHtml(model,view){
    const viewPath = path.join(__dirname,view);
    const renderView = handlebars.compile(fs.readFileSync(viewPath, {encoding: 'utf8'}));
    return renderView(model);
  }
}
module.exports = Controller;
