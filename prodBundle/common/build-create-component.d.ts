import { Helpers } from './build-component-helpers';
import { ClassNames, CreateComponent } from './types';
import { CreateComponentHelpers } from './build-component-helpers/types';
export declare const buildCreateComponent: ({ render, inject: { classNames }, options, }?: BuildCreateComponentProps) => Promise<{
    createComponent: CreateComponent;
    helpers: Helpers;
}>;
interface BuildCreateComponentProps {
    render(props: {
        className?: string;
        classNames?: ClassNames;
        style: Record<string, string | number>;
    }): string;
    inject?: {
        classNames?: ClassNames;
    };
    options?: CreateComponentHelpers[];
}
export {};
