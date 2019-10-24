export declare type HTMLTag = 'p' | 'main' | 'div' | 'header' | 'footer' | 'nav' | 'sidebar' | 'custom' | 'form' | 'input' | 'button' | 'img' | 'picture' | 'a';
export declare type HTMLElementProps = {};
export declare type ComponentProps = HTMLElementProps & {
    componentId?: string;
    helpers?: import('./build-component-helpers').Helpers;
};
export declare type CreateComponent = (props: ComponentProps) => string;
export declare type ComponentFunction<P = ComponentProps, R = string> = (props?: Partial<ComponentProps> & P) => R;
export declare type ClassNames = Record<string, string>;
export { Helpers } from './build-component-helpers';
