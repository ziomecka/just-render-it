import { CreateComponentHelpers } from './types';

const createComponentHelpers: Map<CreateComponentHelpers, unknown> = new Map([
  [
    CreateComponentHelpers.controlBodyScroll,
    import('./helpers/control-body-scroll') as unknown,
  ],
  [
    CreateComponentHelpers.controlInternalState,
    import('./helpers/control-internal-state') as unknown,
  ],
  [
    CreateComponentHelpers.documentEventsPublisher,
    import('./helpers/document-events-publisher') as unknown,
  ],
  [
    CreateComponentHelpers.enqueueScript,
    import('./helpers/enqueue-script') as unknown,
  ],
  [
    CreateComponentHelpers.modifyBodyClassList,
    import('./helpers/modify-body-class-list') as unknown,
  ],
  [
    CreateComponentHelpers.windowEventsPublisher,
    import('./helpers/window-events-publisher') as unknown,
  ],
]);

export const getCreateComponentHelper = (
  async (value: CreateComponentHelpers): Promise<unknown> => (
    await createComponentHelpers.get(value)
  )
);
