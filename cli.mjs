#!/usr/bin/env -S node --experimental-modules

import program from 'commander';
import path from 'path';
import fs from 'fs';
import spqr from './index.mjs';

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
      const root = path.resolve('.');

      const actions = [
        {type:'new-create-dirs', name, root},
        {type:'new-create-package', name, root},
        {type:'new-apply-template', name, root, template},
      ];
      console.log(actions);
      spqr({actions});

  });



  program.parse(process.argv)

}

main();
