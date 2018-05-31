  const Handlebars = require('handlebars');
const path = require('path');
const fs = require('fs');

module.exports = function({startAt=0, perPage=3}){


  const top = [
    'link',
    'bio'
  ];

  const database = [

    'outdoorsman',
    'nordhouse-mist',
    'outdoorsman',

    'nordhouse-mist',
    'outdoorsman',
    'nordhouse-mist',

    'outdoorsman',
    'nordhouse-mist',
    'outdoorsman',

  ];

  var count = 3;
  if(startAt+perPage > database.length){
    startAt=database.length-perPage;
  }

  console.log('startAt=%d, startAt+perPage=%d',startAt, startAt+perPage);

  const ordered = top.concat(database.slice(startAt, startAt+perPage));
  const cards = ordered.map(name=>inflator(name))

  return {startAt,cards};

}

function inflator(name){
  const source = fs.readFileSync(__dirname + path.sep + name + path.sep + 'index.hbs').toString();
  const template = Handlebars.compile(source);
  const data = {};
  const result = template(data);
  return result;
}
