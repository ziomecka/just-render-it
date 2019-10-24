/* eslint-disable @typescript-eslint/no-namespace */
export {};

type ComponentProps = import('./common/').ComponentProps;

declare global {
  namespace NodeJS {
    export interface Global {
      createComponent({ ...args }: Partial<ComponentProps>): string;
      helpers: import('./common/').Helpers;
      window: object;
      document: object;
    }
  }
  function createComponent ({ ...args }: Partial<ComponentProps>): string;
}
