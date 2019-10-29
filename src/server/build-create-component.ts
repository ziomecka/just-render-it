import {
  BuildCreateComponent,
  buildCreateComponent as commonBuilder,
} from '../common/';

const render = require('rendering-recursive-server-side').default;

const buildCreateComponent: BuildCreateComponent = async (
  {
    inject: { classNames = {} } = {},
    options = [],
    globals = {
      createComponent: true,
      helpers: false,
    },
  } = {}
) => {
  return await commonBuilder({
    render,
    inject: { classNames },
    options,
    globals,
  });
};

export { buildCreateComponent };
