var browserify = require('broccoli-browserify');
var mergeTrees = require('broccoli-merge-trees');
var pickFiles  = require('broccoli-static-compiler');
var reactify   = require('broccoli-react');

var appTree = 'app';
appTree = reactify(appTree);

var htmlTree = pickFiles(appTree, {
  srcDir: '/',
  files: ['index.html'],
  destDir: ''
});

var cssTree = pickFiles(appTree, {
  srcDir: '/styles',
  files: ['app.css'],
  destDir: 'assets'
});

var jsTree = browserify(appTree, {
  entries: ['./app.js'],
  outputFile: 'assets/app.js'
});

var publicTree = 'public';

module.exports = mergeTrees([htmlTree, cssTree, jsTree, publicTree]);
