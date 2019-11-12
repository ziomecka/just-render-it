import { buildCreateComponent } from '../build-create-component';
import { expect } from 'chai';
import scenarios from './fixtures';
const jsdom  = require('jsdom');
const { JSDOM } = jsdom;

const { window } = new JSDOM();
const { document } = window;

global.window = window;
global.document = document;

describe('buildCreateComponent', () => {
  before(() => buildCreateComponent());

  it('creates global createComponent function', () => {
    expect(typeof createComponent).to.eql('function');
  });

  describe('which:', () => {
    scenarios.forEach(({ scenario, result }) => {
      it(`returns html element: ${ result }`, () => {
        const component = createComponent(scenario);
        expect(component).to.equal(result);
      });
    });
  });
});
