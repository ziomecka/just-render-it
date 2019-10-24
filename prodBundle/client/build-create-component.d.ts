import { Helpers } from '../common/';
declare const buildCreateComponent: ({ classNames, options, globals, }?: BuildCreateComponentProps) => Promise<{
    helpers: Helpers;
    createComponent: unknown;
}>;
export { buildCreateComponent };
interface BuildCreateComponentProps {
    classNames?: Record<string, string>;
    options?: [];
    globals?: {
        createComponent?: boolean;
        helpers?: boolean;
    };
}
