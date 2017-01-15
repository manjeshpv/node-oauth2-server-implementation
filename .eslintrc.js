'use strict';

const eslintrc = {
  extends: ['eslint-config-standard'],
  env: {
    node: true,
    es6: true,
  },
  rules: {
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'semi': ["error", "always"],
    'comma-dangle': ["error", "always-multiline"],
  }
};

module.exports = eslintrc;