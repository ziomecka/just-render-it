import { expect } from 'chai';
import { buildStyle } from './build-style';

describe('build style', () => {
  it('prefixes style', () => {
    const scenario = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      position: 'relative',
      transition: '200ms all linear',
    };

    const result = {
      display:
          [ '-webkit-box',
            '-moz-box',
            '-ms-flexbox',
            '-webkit-flex',
            'flex' ],
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        position: 'relative',
        transition: '200ms all linear',
        WebkitBoxPack: 'center',
        WebkitBoxAlign: 'center',
        WebkitBoxLines: 'multiple',
        WebkitTransition: '200ms all linear',
        MozTransition: '200ms all linear',
    };

    expect(buildStyle({}, scenario)).to.eql(result);
  });
});
