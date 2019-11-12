import { buildCreateComponent } from '../build-create-component';
import { expect } from 'chai';
import { flatten } from './flatten';
import scenarios from './fixtures';

describe('buildCreateComponent', () => {
  before(() => buildCreateComponent());

  it('creates global createComponent function', () => {
    expect(typeof createComponent).to.eql('function');
  });

  describe('which:', () => {
    scenarios.forEach(({ scenario, result }) => {
      it(`returns html element: ${ result }`, () => {
        const component = createComponent(scenario)[0];
        const style = component.style._values || {};
        expect(style).to.deep.equal(flatten(scenario.style) || {});
      });
    });
  });
});
