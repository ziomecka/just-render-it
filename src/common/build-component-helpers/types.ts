export const enum CreateComponentHelpers {
  controlBodyScroll = 'controlBodyScroll',
  controlInternalState = 'controlInternalState',
  enqueueScript = 'enqueueScript',
  modifyBodyClassList = 'modifyBodyClassList',
  windowEventsPublisher = 'windowEventsPublisher',
  documentEventsPublisher = 'documentEventsPublisher',
}

export type Helpers = {
  [CreateComponentHelpers.controlBodyScroll]?:
    import('./helpers.types').ControlBodyScroll;
  [CreateComponentHelpers.controlInternalState]?:
    import('./helpers.types').ControlInternalState;
  [CreateComponentHelpers.documentEventsPublisher]?:
    import('./helpers.types').Publisher;
  [CreateComponentHelpers.enqueueScript]?:
    import('./helpers.types').EnqueueScript;
  [CreateComponentHelpers.modifyBodyClassList]?:
    import('./helpers.types').ModifyBodyClassList;
  [CreateComponentHelpers.windowEventsPublisher]?:
    import('./helpers.types').Publisher;
};
