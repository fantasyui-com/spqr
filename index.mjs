import path from 'path';
import fs from 'fs';

import ensureModule from 'ensure-module';

export default async function main({actions}){

  const mapped = actions
  .map(({type, ...actionData})=>({
    templateDirectory: path.resolve(path.join('.','tmpl_modules','action')),
          moduleIndex: path.resolve(path.join('.','tmpl_modules','action', 'index.mjs')),
      actionDirectory: path.resolve(path.join('lib', type)),
           actionData
  }));

  mapped
  .map(({templateDirectory,actionDirectory,actionData})=>ensureModule(templateDirectory,actionDirectory,actionData))

  let result = {};
  for (const {moduleIndex, actionData} of mapped){
    const previousResult = result;
    const action = (await import(moduleIndex)).default;
    result = await action(actionData);
    console.log('action result', result)
  }

}
