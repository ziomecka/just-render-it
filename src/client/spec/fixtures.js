const scenarios = [
  {
    scenario: {
      HTMLTag: 'div',
      attributes: { id: 'root'},
      style: {
        opacity: '1',
      },
    },
    result: '<div id="root" style="opacity:1"></div>',
  },
  {
    scenario: {
      HTMLTag: 'div',
      attributes: { id: 'root'},
      style: {
        display: 'flex',
      },
    },
    result: '<div id="root" style="display:-webkit-box; display:-moz-box; display:-ms-flexbox; display:-webkit-flex; display:flex"></div>',
  },
  {
    scenario: {
      HTMLTag: 'div',
      attributes: { id: 'root'}
    },
    result: '<div id="root"></div>',
  },
];

export default scenarios;
