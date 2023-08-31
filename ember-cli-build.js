'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    minifyCSS: {
      options: { processImport: true },
    },
    sassOptions: {
      extension: 'scss',
      includePaths: ['node_modules/modern-normalize/'],
    },
  });

  return app.toTree();
};
