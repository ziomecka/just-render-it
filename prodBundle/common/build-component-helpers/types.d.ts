export declare const enum CreateComponentHelpers {
    controlBodyScroll = "controlBodyScroll",
    controlInternalState = "controlInternalState",
    modifyBodyClassList = "modifyBodyClassList",
    windowEventsPublisher = "windowEventsPublisher"
}
declare type HelperFunction = (...args: unknown[]) => unknown;
export declare type Helpers = {
    [CreateComponentHelpers.modifyBodyClassList]: HelperFunction;
    [CreateComponentHelpers.controlBodyScroll]: HelperFunction;
    [CreateComponentHelpers.controlInternalState]: HelperFunction;
    [CreateComponentHelpers.windowEventsPublisher]: HelperFunction;
};
export {};
