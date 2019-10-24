export const enum CreateComponentHelpers {
  controlBodyScroll = 'controlBodyScroll',
  controlInternalState = 'controlInternalState',
  modifyBodyClassList = 'modifyBodyClassList',
  windowEventsPublisher = 'windowEventsPublisher',
}

type HelperFunction = (...args: unknown[]) => unknown;

export type Helpers = {
  [CreateComponentHelpers.modifyBodyClassList]: HelperFunction;
  [CreateComponentHelpers.controlBodyScroll]: HelperFunction;
  [CreateComponentHelpers.controlInternalState]: HelperFunction;
  [CreateComponentHelpers.windowEventsPublisher]: HelperFunction;
};
