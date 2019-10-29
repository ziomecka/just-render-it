import {
  ClassNames,
  ComponentFunction,
  Helpers,
} from '../common/';

export const hydrate = (
  ({ Component, classNames, rootId, helpers = {} }: HydrateProps): void => {
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

    const { enqueueScript: { componentDidMountQueue = [] } = {} } = helpers;
    while (componentDidMountQueue.length) {
      componentDidMountQueue.shift()();
    }
  }
);

interface HydrateProps {
  rootId: string;
  Component: ComponentFunction;
  classNames? : ClassNames;
  helpers?: Helpers;
}
