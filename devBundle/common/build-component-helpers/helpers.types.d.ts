export declare type Publisher = import('publisher-subscriber-pattern').Publisher;
export declare type ControlBodyScroll = {
    turnOffBodyScrolling(): void;
    turnOnBodyScrolling(): void;
};
export declare type ControlInternalState<T = 'string'> = (initialValue: T) => [() => T, (value: T) => void];
export declare type ModifyBodyClassList = {
    addBodyClass(className: string): void;
    removeBodyClass(className: string): void;
};
export declare type EnqueueScript = {
    enqueueScript(componentScript: () => void): void;
    componentDidMountQueue: (() => void)[];
};
