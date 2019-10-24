import { HTMLElementProps } from '../common/';

export type ComponentFunction<P = HTMLElementProps> =
  (props?: Partial<HTMLElementProps> & P) => HTMLCollection;
