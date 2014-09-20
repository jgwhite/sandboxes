/* global require, module */

var EmberApp      = require('ember-cli/lib/broccoli/ember-app');
var mergeTrees    = require('broccoli-merge-trees');
var pickFiles     = require('broccoli-static-compiler');
var unwatchedTree = require('broccoli-unwatched-tree');

var app = new EmberApp();
app = app.toTree();

var common = pickFiles('../common', {
  srcDir: '/',
  destDir: 'assets'
});

var ace = unwatchedTree('bower_components/ace-builds/src-min-noconflict');
ace = pickFiles(ace, {
  srcDir: '/',
  destDir: 'assets/ace'
});

module.exports = mergeTrees([common, ace, app]);
