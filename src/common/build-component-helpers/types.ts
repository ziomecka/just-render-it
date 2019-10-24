export const enum CreateComponentHelpers {
  controlBodyScroll = 'controlBodyScroll',
  modifyBodyClassList = 'modifyBodyClassList',
  windowEventsPublisher = 'windowEventsPublisher',
}

type HelperFunction = (...args: unknown[]) => unknown;

export type Helpers = {
  [CreateComponentHelpers.modifyBodyClassList]: HelperFunction;
  [CreateComponentHelpers.controlBodyScroll]: HelperFunction;
  [CreateComponentHelpers.windowEventsPublisher]: HelperFunction;
};
