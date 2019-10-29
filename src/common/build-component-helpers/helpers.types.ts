export type Publisher = import('publisher-subscriber-pattern').Publisher;

export type ControlBodyScroll = {
  turnOffBodyScrolling(): void;
  turnOnBodyScrolling(): void,
};

export type ControlInternalState<T = 'string'> = (initialValue: T) => [
  () => T,
  (value: T) => void,
];

export type ModifyBodyClassList = {
  addBodyClass(className: string): void;
  removeBodyClass(className: string): void;
};

export type EnqueueScript = {
  enqueueScript(componentScript: () => void): void;
  componentDidMountQueue: (() => void)[];
};
