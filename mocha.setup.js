global.document = global.document || {
  body: {
    classList: {
      add: () => {},
      remove: () => {},
    },
    style: {},
  },
  createElement: () => {},
};