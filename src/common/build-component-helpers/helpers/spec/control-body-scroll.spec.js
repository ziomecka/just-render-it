import controlBodyScroll from '../control-body-scroll';
import { expect } from 'chai';

describe('control body scroll\'s methods', () => {
  global.document.body.style.overflowY = '';

  const hidden = 'hidden';
  const visible = 'visible';

  it('change overflowY to visible', () => {
    // when
    controlBodyScroll.turnOnBodyScrolling();

    // then
    expect(document.body.style.overflowY).to.equal(visible);
  });

  it('change overflowY to hidden', () => {
    // when
    controlBodyScroll.turnOffBodyScrolling();

    // then
    expect(document.body.style.overflowY).to.equal(hidden);
  });
});
