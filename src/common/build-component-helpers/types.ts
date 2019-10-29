export const enum CreateComponentHelpers {
  controlBodyScroll = 'controlBodyScroll',
  controlInternalState = 'controlInternalState',
  modifyBodyClassList = 'modifyBodyClassList',
  windowEventsPublisher = 'windowEventsPublisher',
  documentEventsPublisher = 'documentEventsPublisher',
}

type HelperFunction = (...args: unknown[]) => unknown;

export type Helpers = {
  [CreateComponentHelpers.modifyBodyClassList]: HelperFunction;
  [CreateComponentHelpers.controlBodyScroll]: HelperFunction;
  [CreateComponentHelpers.windowEventsPublisher]: HelperFunction;
  [CreateComponentHelpers.documentEventsPublisher]: HelperFunction;
  [CreateComponentHelpers.controlInternalState]?: ControlInternalState;
};

export type ControlInternalState<T = 'string'> = (initialValue: T) => [
  () => T,
  (value: T) => void,
];

