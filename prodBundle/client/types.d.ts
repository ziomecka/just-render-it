import { HTMLElementProps } from '../common/';
export declare type ComponentFunction<P = HTMLElementProps> = (props?: Partial<HTMLElementProps> & P) => HTMLCollection;
