# spqr

Simulated Website and Social Network

## Constraints

User must use Bootstrap flavored HTML
Database is a module like structure with an index.js

## TODO

[x] System Outline
[ ] Test fencepost problem with cards (ew!)
[ ] Make startAt logic cleaner (double ew)
[ ] Add likes
[ ] Add comments
[ ] Add zooms
[ ] Add video support
[ ] Add music support
[ ] Launch on linode

## Statement of Purpose

Development of useful Web Themes and Components must be driven by realistic scenarios.
SPQR creates just such an environment. Headers, footers, intros, forms and cards.

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# run compatibility tests
$ npm test;

# serve with hot reload at localhost:3000
$ npm run dev
$ npm run watch

# build for production and launch server
$ npm run build
$ npm start

# use default npm command for updates
$ npm update;

# using a process manager to manage the server:
pm2 start spqr/server.js
pm2 save

```

If you choose to use pm2 you can activate the provided process.json via ```$> start spqr/process.json``` please remember to update and guard the secret keys.

```json

{
  "apps": [

    {

    "name": "spqr",
    "script":"server.js",
    "cwd":"/home/spqr/spqr",

    "env": {

      "NAME" : "spqr",

      }

    }

  ]
}


```

### Low Number Ports
Server requires access to low level ports 80 (http) and 443 (https) to operate by default.
On linux servers you can use the following command to give Node access to these ports.
Note use of ```sudo setcap cap_net_bind_service=+ep $(which node)```
Note: Port forwarding is the preferred method.
