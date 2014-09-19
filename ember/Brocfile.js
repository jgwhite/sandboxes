/* global require, module */

var EmberApp   = require('ember-cli/lib/broccoli/ember-app');
var mergeTrees = require('broccoli-merge-trees');
var pickFiles  = require('broccoli-static-compiler');

var app = new EmberApp();

var common = pickFiles('../common', {
  srcDir: '/',
  destDir: 'assets'
});

module.exports = mergeTrees([common, app.toTree()]);
