# render-it-client [![npm version](https://badge.fury.io/js/render-it-client.svg)](https://badge.fury.io/js/render-it-client)

# render-it-server [![npm version](https://badge.fury.io/js/render-it-server.svg)](https://badge.fury.io/js/render-it-server)

## About

Function 'createComponent' and dynamically imported, optional helpers for client and server side rendering.
Function 'hydrate' for client side rendering.

Dynamically imported, optional helpers:
* controlBodyScroll,
* controlInternalState (works like useState hook in React),
* enqueueScript,
* modifyBodyClassList,
* windowEventsPublisher,
* documentEventsPublisher.

Package has been used as a simple alternative to React to code my portfolio website: [katarzyna-ziomek-zdanowicz.com](http://katarzyna-ziomek-zdanowicz.com). The relevant [repository](https://github.com/ziomecka/katarzyna-ziomek-zdanowicz) is avaliable on github.

## Installation

```javascript
npm i render-it-client render-it-server -S
```

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
