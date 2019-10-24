import { ClassNames, Helpers } from '../common/';
import { ComponentFunction } from './types';
interface HydrateProps {
    rootId: string;
    Component: ComponentFunction;
    classNames?: ClassNames;
    helpers?: Helpers;
}
export declare const hydrate: ({ Component, classNames, rootId, helpers }: HydrateProps) => void;
export {};
