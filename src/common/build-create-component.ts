import { BuildCreateComponent } from './types';
import { buildComponentHelpers } from './build-component-helpers';
import { buildStyle } from './utils/build-style';

export const buildCreateComponent: BuildCreateComponent = async (
  {
    render,
    inject: { classNames = {} } = {},
    options = [],
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

  return {
    createComponent,
    helpers,
  };
};
