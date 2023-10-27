"use strict";

module.exports = {
  overrides: [
    {
      files: ['*.mpx', '**/*.mpx'],
      extends: ['stylelint-config-recommended'],
      customSyntax: 'postcss-html'
    }
  ],
};
