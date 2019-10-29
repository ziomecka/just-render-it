import { Publisher } from 'publisher-subscriber-pattern';
export declare const enum CreateComponentHelpers {
    controlBodyScroll = "controlBodyScroll",
    controlInternalState = "controlInternalState",
    enqueueScript = "enqueueScript",
    modifyBodyClassList = "modifyBodyClassList",
    windowEventsPublisher = "windowEventsPublisher",
    documentEventsPublisher = "documentEventsPublisher"
}
export declare type Helpers = {
    [CreateComponentHelpers.controlBodyScroll]?: ControlBodyScroll;
    [CreateComponentHelpers.controlInternalState]?: ControlInternalState;
    [CreateComponentHelpers.documentEventsPublisher]?: Publisher;
    [CreateComponentHelpers.enqueueScript]?: EnqueueScript;
    [CreateComponentHelpers.modifyBodyClassList]?: ModifyBodyClassList;
    [CreateComponentHelpers.windowEventsPublisher]?: Publisher;
};
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
