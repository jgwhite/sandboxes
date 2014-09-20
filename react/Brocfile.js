var browserify    = require('broccoli-browserify');
var mergeTrees    = require('broccoli-merge-trees');
var pickFiles     = require('broccoli-static-compiler');
var reactify      = require('broccoli-react');
var unwatchedTree = require('broccoli-unwatched-tree');

var common = pickFiles('../common', {
  srcDir: '/',
  destDir: 'assets'
});

var ace = unwatchedTree('bower_components/ace-builds/src-min-noconflict');
ace = pickFiles(ace, {
  srcDir: '/',
  destDir: 'assets/ace'
});

var public = 'public';

var app = 'app';
app = reactify(app);

var html = pickFiles(app, {
  srcDir: '/',
  files: ['index.html'],
  destDir: ''
});

var css = pickFiles(app, {
  srcDir: '/styles',
  files: ['app.css'],
  destDir: 'assets'
});

var js = browserify(app, {
  entries: ['./app.js'],
  outputFile: 'assets/app.js'
});

module.exports = mergeTrees([common, ace, public, html, css, js]);
