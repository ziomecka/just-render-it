import {
  ClassNames,
  Helpers,
} from '../common/';
import { ComponentFunction } from './types';
import { componentDidMountQueue } from './enqueue-script';

interface HydrateProps {
  rootId: string;
  Component: ComponentFunction;
  classNames? : ClassNames;
  helpers?: Helpers;
}

export const hydrate = (
  ({ Component, classNames, rootId, helpers }: HydrateProps): void => {
    const $root = document.getElementById(rootId);

    if ($root && $root.children.length) {
      $root.replaceChild(
        Component({ classNames, helpers })[0] as unknown as Node, // todo
        $root.children[0] // todo
      );
    } else {
      $root.append(
        Component({ classNames, helpers })[0] as unknown as Node //todo
      );
    }

    while (componentDidMountQueue.length) {
      componentDidMountQueue.shift()();
    }
  }
);
