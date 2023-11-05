import basic from './configs/basic.js';
import react from './configs/react.js';
import tests from './configs/tests.js';

const plugin = {
  configs: {
    basic,
    react: react.concat(basic),
    tests: tests.concat(basic),
  },
  rules: {},
  processors: {},
};

export default plugin;
