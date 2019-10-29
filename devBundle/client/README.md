# render-it-client [![npm version](https://badge.fury.io/js/render-it-client.svg)](https://badge.fury.io/js/render-it-client)

## About

Functions 'createComponent', 'hydrate', and dynamically imported, optional helpers for client side rendering.

Package has been used as a simple alternative to React to code my portfolio website: [katarzyna-ziomek-zdanowicz.com](http://katarzyna-ziomek-zdanowicz.com). The relevant [repository](https://github.com/ziomecka/katarzyna-ziomek-zdanowicz) is avaliable on github.

## Installation

```javascript
npm i render-it-client -S
```

## Details

Package exports:
* function 'buildCreateComponent',
* function 'enqueueScript',
* function 'hydrate',
* types / interfaces:
  - ClassNames,
  - ComponentFunction,
  - ComponentProps,
  - Flex,
  - HTMLAnchorElementAttributes,
  - HTMLElementAttributes,
  - HTMLElementProps,
  - HTMLInputType,
  - HTMLTag,
  - Helpers,

Function buildCreateComponent can be provided with object parameter with the following keys:
* options = [],
* globals = {
  createComponent: true,
  helpers: false,
}.

Array 'options' defines which of the optional helpers should be dynamically imported:
* controlBodyScroll,
* controlInternalState (works like useState hook in React),
* enqueueScript,
* modifyBodyClassList,
* windowEventsPublisher,
* documentEventsPublisher.

Object 'global' decides whether 'createComponent' xor 'helpers' should be global objects.

## Dependencies

* publisher-subscriber-pattern
* rendering-recursive-client-side
* rendering-recursive-server-side

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
