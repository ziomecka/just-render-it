import { BuildCreateComponent } from './types';
import { buildComponentHelpers } from './build-component-helpers';
import { buildStyle } from './utils/build-style';

export const buildCreateComponent: BuildCreateComponent = async (
  {
    render,
    inject: { classNames = {} } = {},
    options = [],
    globals = {
      createComponent: true,
      helpers: false,
    },
  } = { render: (): string => '' }
) => {

  const createComponent = ({
    componentId,
    className = '',
    style,
    flex,
    ...otherProps
  }): string => {
    const injectedClassName = (componentId && classNames[ componentId ])
      ? classNames[ componentId ]
      : '';

    return render({
      style: buildStyle(style, flex),
      ...otherProps,
      className: `${ injectedClassName } ${ className }`,
    });
  };

  const helpers = await buildComponentHelpers(options);

  if (globals.createComponent) global.createComponent = createComponent;
  if (globals.helpers) global.helpers = helpers;

  return {
    createComponent,
    helpers,
  };
};
