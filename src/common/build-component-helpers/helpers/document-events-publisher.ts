/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { Publisher } from 'publisher-subscriber-pattern';

export let publisher: Publisher;

const publisherScript = (): Publisher => {
  publisher = new Publisher(
    // @ts-ignore
    global.window ?  global.window.document : window.document,
    'addEventListener',
    'removeEventListener',
  );

  return publisher;
};

export default () => publisherScript();
