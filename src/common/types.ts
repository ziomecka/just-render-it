import {
  CreateComponentHelpers,
  Helpers,
} from './build-component-helpers/types';
import { HTMLElementProps } from './html.types';

export type ComponentProps = HTMLElementProps & {
  componentId?: string;
  helpers?: import('./build-component-helpers/types').Helpers;
  flex?: import('./utils/build-style').Flex;
  classNames?: ClassNames;
  HTMLTag?: string
  className?: string;
  children?: string[];
  value?: string | number;
  targetBlank?: boolean;
  style?: { [key: string]: number | boolean | string };
  eventHandlers?: Record<string, (args?: unknown) => void>;
};

export type CreateComponent = (props: ComponentProps) => string;

export type ComponentFunction<P = ComponentProps, R = string> =
  (props?: Partial<ComponentProps> & P) => R;

export type ClassNames = { [key: string]: string };

export type Globals = {
  createComponent?: boolean;
  helpers?: boolean;
};

type BuildCreateComponentProps = {
  render?: (props: {
    className?: string;
    classNames?: ClassNames;
    style: { [key: string]: string | number | boolean};
  }) => string;
  inject?: {
    classNames?: ClassNames;
  };
  options?: CreateComponentHelpers[];
  globals?: Globals;
};

export type BuildCreateComponent =
  (props: BuildCreateComponentProps ) => Promise<{
    createComponent: CreateComponent;
    helpers: Helpers;
  }>;
