#!/usr/bin/env -S node --experimental-modules

import {inspect} from 'util';
import program from 'commander';
import path from 'path';
import fs from 'fs';
import spqr from './index.mjs';

import {createActions} from '../action-toolkit/index.mjs';

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
    .action(async function (name, {template}) {
      const root = path.resolve('.');

      const actions = await createActions({
        file: './actions.json',
        name:'New Site',
        context:{
          siteName: name,
          siteRootPath: root,
          templateName: template,
        }
      });

      console.log(inspect(actions, null, 3, true));

      //spqr({actions});

  });



  program.parse(process.argv)

}

main();
