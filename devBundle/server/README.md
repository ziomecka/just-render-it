# render-it-server
[![npm version](https://badge.fury.io/js/render-it-server.svg)](https://badge.fury.io/js/render-it-server)

## About

Function 'createComponent' for server side rendering.

## Installation

```javascript
npm i render-it-server -S
```

## Details

Package exports function 'buildCreateComponent'.

Function buildCreateComponent can be provided with object parameter with the following keys:
* globals = {
  createComponent: true,
  helpers: false,
}.

## Dependencies

* rendering-recursive-server-side
* publisher-subscriber-pattern

## DevDependencies

* typescript
* webpack
* babel
* mocha
* chai
* sinon
* eslint
* lerna

---
[![lerna](https://img.shields.io/static/v1?label=maintained%20with&message=lerna&color=a53860)](https://lerna.js.org/)
![coded with love](https://img.shields.io/static/v1?label=coded%20with&message=love&color=a53860)
