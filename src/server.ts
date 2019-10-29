import { Helpers, CreateComponent } from './common/'
import { buildCreateComponent as builder } from './server/';

export const buildCreateComponent = (
  async ({ classNames = {}, options = [] } = {}): Promise<{
    createComponent: CreateComponent,
    helpers: Helpers,
  }> => {
    const fakeFunction = (): void => {};

    global.window = {
      addEventListener: fakeFunction,
      removeEventListener: fakeFunction,
      document: {
        addEventListener: fakeFunction,
        removeEventListener: fakeFunction,
      },
    };

    global.document = {
      getElementById: fakeFunction,
      getElementsByClassName: fakeFunction,
      getElementsByTagName: fakeFunction,
    };

    return await builder({ inject: { classNames }, options });
  }
);
