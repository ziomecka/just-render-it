import { HTMLElementProps } from './html.types';

export type ComponentProps = HTMLElementProps & {
  componentId?: string;
  helpers?: import('./build-component-helpers').Helpers;
}

export type CreateComponent = (props: ComponentProps) => string;

export type ComponentFunction<P = ComponentProps, R = string> =
  (props?: Partial<ComponentProps> & P) => R;

export type ClassNames = { [key: string]: string };

export { Helpers } from './build-component-helpers';
