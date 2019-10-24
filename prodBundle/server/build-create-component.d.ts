import { CreateComponent, Helpers } from '../common/';
declare const buildCreateComponent: ({ classNames, options }?: {
    classNames?: {};
    options?: any[];
}) => Promise<{
    createComponent: CreateComponent;
    helpers: Helpers;
}>;
export { buildCreateComponent };
