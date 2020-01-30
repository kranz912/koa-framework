require("@babel/core").transform("code", {
  plugins: ["@babel/plugin-proposal-class-properties"]
});

handlebars = require('handlebars');
fs = require('fs');
path = require('path');


class Controller {

  constructor() {

  }
  renderHtml(view,model){

    const viewPath = path.join(__dirname,view);
    const renderView = handlebars.compile(fs.readFileSync(viewPath, {encoding: 'utf8'}));
    return renderView(model);
  }

}
module.exports = Controller;
