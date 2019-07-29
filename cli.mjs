#!/usr/bin/env -S node --experimental-modules

import {inspect} from 'util';
import program from 'commander';
import path from 'path';
import fs from 'fs';
import spqr from './index.mjs';

import kebabCase from 'lodash/kebabCase.js';
import camelCase from 'lodash/camelCase.js';

const actionInstaller = async function({name,context}){
  const system = JSON.parse( (await fs.promises.readFile('./actions.json')).toString() );
  const action = system.program.actions.filter(action=>camelCase(action.configuration.name)===camelCase(name)).pop();
  console.log(action.data)

  for(let {name} of action.data){
    const id = camelCase(name);
    if(!context[id]) throw new Error(`Action context requires: ${id}`)
  }

  for(let element of action.actions){
    element.context = {};
    for(let item of element.data){
      const id = camelCase(item.name);
      element.context[id] = context[id];
    }
  }

  return action;
}

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

      const actions = await actionInstaller({
        name:'New Site',
        context:{
          siteName: name,
          siteRootPath: root,
          templateName: template,
        }
      });


      // const actions = [
      //   {type:'new-create-dirs', name, root},
      //   {type:'new-create-package', name, root},
      //   {type:'new-apply-template', name, root, template},
      // ];
      console.log(inspect(actions, null, 3));

      //spqr({actions});

  });



  program.parse(process.argv)

}

main();
