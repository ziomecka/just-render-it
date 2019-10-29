export declare type HTMLTag = 'p' | 'main' | 'div' | 'header' | 'footer' | 'nav' | 'sidebar' | 'custom' | 'form' | 'input' | 'button' | 'img' | 'picture' | 'a';
export declare const enum HTMLInputType {
    text = "text",
    password = "password",
    file = "file",
    image = "image"
}
export declare type HTMLElementAttributes = {
    [key: string]: number | boolean | string;
    id?: string;
    title?: string;
    tabIndex?: number;
    autoFocus?: boolean;
    role?: string;
    'aria-hidden'?: boolean;
    'aria-modal'?: boolean;
    'aria-labelledby'?: string;
    'aria-describedby'?: string;
};
declare type Target = '_blank' | '';
export declare type HTMLAnchorElementAttributes = HTMLElementAttributes & {
    href?: string;
    target?: Target;
    download?: boolean;
};
export declare type HTMLImageElementAttributes = HTMLElementAttributes & {
    alt: string;
    src?: string;
};
export declare type HTMLInputElementAttributes = HTMLElementAttributes & {
    pattern?: string;
    placeholder?: string;
    required?: boolean;
    type?: HTMLInputType;
};
export declare type HTMLTextareaElementAttributes = HTMLElementAttributes & {
    Rows?: number;
    placeholder?: string;
    required?: boolean;
};
export declare type HTMLElementProps = {
    attributes?: HTMLElementAttributes;
    innerHTML?: string;
};
export {};
