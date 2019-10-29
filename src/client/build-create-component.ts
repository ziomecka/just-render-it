import {
  BuildCreateComponent,
  buildCreateComponent as commonBuilder,
} from '../common/';

const buildRender = require('rendering-recursive-client-side').default;

const buildCreateComponent: BuildCreateComponent = async ({
  inject: { classNames = {}} = {},
  options = [],
  globals = {
    createComponent: true,
    helpers: false,
  },
} = {}) => {
  return await commonBuilder({
    render: buildRender(document),
    inject: { classNames },
    options,
    globals,
  });
};

export { buildCreateComponent };
