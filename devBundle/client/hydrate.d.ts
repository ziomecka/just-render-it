import { ClassNames, ComponentFunction, Helpers } from '../common/';
export declare const hydrate: ({ Component, classNames, rootId, helpers }: HydrateProps) => void;
interface HydrateProps {
    rootId: string;
    Component: ComponentFunction;
    classNames?: ClassNames;
    helpers?: Helpers;
}
export {};
