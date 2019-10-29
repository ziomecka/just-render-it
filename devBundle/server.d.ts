import { Helpers, CreateComponent } from './common/';
export declare const buildCreateComponent: ({ classNames, options }?: {
    classNames?: {};
    options?: any[];
}) => Promise<{
    createComponent: CreateComponent;
    helpers: Helpers;
}>;
