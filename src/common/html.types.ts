export type HTMLTag = |
  'p' |
  'main' |
  'div' |
  'header' |
  'footer' |
  'nav' |
  'sidebar' |
  'custom' |
  'form' |
  'input' |
  'button' |
  'img' |
  'picture' |
  'a';

export const enum HTMLInputType {
  text = 'text',
  password = 'password',
  file = 'file',
  image = 'image',
}

export type HTMLElementAttributes = {
  [key: string]: number | boolean | string;
  id?: string;
  title?: string;
  tabIndex?: number;
  autoFocus?: boolean;
  role?: string;
  'aria-hidden'?: boolean;
  'aria-modal'?: boolean;
  'aria-labelledby'?: string;
  'aria-describedby'?:  string;
}

declare type Target = '_blank' | '';

export type HTMLAnchorElementAttributes = HTMLElementAttributes & {
  href?: string;
  target?: Target;
  download?: boolean;
};

export type HTMLImageElementAttributes = HTMLElementAttributes & {
  alt: string;
  src?: string;
};

export type HTMLInputElementAttributes = HTMLElementAttributes & {
  pattern?: string;
  placeholder?: string;
  required?: boolean;
  type?: HTMLInputType;
};

export type HTMLTextareaElementAttributes = HTMLElementAttributes & {
  Rows?: number;
  placeholder?: string;
  required?: boolean;
};

export type HTMLElementProps = {
  attributes?: HTMLElementAttributes;
  innerHTML?: string;
};
