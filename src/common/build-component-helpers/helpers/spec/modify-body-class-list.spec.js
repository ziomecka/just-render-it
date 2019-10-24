import { expect } from 'chai';
import modifyBodyClassList from '../modify-body-class-list';
import sinon from 'sinon';

const fooClass = 'foo-class';

describe('modify body class list\'s methods', () => {
  beforeEach(() => {
    sinon.spy(global.document.body.classList, 'add');
    sinon.spy(global.document.body.classList, 'remove');
  });

  afterEach(() => {
    const { classList } = document.body;
    classList.add.restore();
    classList.remove.restore();
  });

  it('call "add" method on body class list', () => {
    // when
    modifyBodyClassList.addBodyClass(fooClass);

    // then
    expect(document.body.classList.add.calledOnceWith(fooClass)).to.be.true;
  });

  it('call "remove" method on body class list', () => {
    // when
    modifyBodyClassList.removeBodyClass(fooClass);

    // then
    expect(document.body.classList.remove.calledOnceWith(fooClass)).to.be.true;
  });
});