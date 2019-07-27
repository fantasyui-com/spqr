#!/usr/bin/env -S node --no-warnings --experimental-modules

const program = require('commander');
const path = require('path');
const fs = require('fs');

const dreamtime = require('./index.js');

async function main(){

/*
  spqr new my-site
  spqr develop
  spqr build
  spqr serve
*/

  program
    .command('new <name>')
    .option('-t, --template [name]', 'Specify template [drafonfly]', 'drafonfly')
    .action(function (name, {template}) {

      const spqr = require('./index.js');
      const root = path.resolve(dir);

      spqr([
        {type:'new-site/create-dirs', name, root},
        {type:'new-site/create-package', name, root},
        {type:'new-site/apply-template', name, root, template},
      ]);

  });



  program.parse(process.argv)

}

main();
