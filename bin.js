import fs from 'fs'
import path from 'path'

const packageFile = `
{
  "name": "",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "license": "AGPL-version-3.0",
  "private": false,
  "engines": {
    "node": ">= 14.0.0",
    "npm": ">= 6.0.0"
  },
  "homepage": "",
  "repository": {
    "type": "git",
    "url": ""
  },
  "bugs": "",
  "keywords": [],
  "author": {
    "name": "",
    "email": "",
    "url": ""
  },
  "contributors": [

  ],
  "scripts": {
    "dev": "",
    "test": ""
  },
  "dependencies": {

  },
  "devDependencies": {

  }
}
`

const cwd = fs.realpathSync(process.cwd())
fs.writeFileSync(path.join(cwd, 'package.json'), packageFile)
