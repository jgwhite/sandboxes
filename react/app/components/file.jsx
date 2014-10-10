/** @jsx React.DOM */

var React     = require('react');
var find      = require('lodash').find;
var AceEditor = require('./ace-editor');

var MODE_MAP = {
  'js': 'javascript',
  'jsx': 'jsx',
  'css': 'css'
};

module.exports = React.createClass({
  displayName: 'File',

  render: function() {
    var fileId = this.props.params.fileId;
    var files  = this.props.files;
    var file   = find(files, function(file) { return file.name === fileId });
    var ext    = file.name.split('.')[1];
    var mode   = MODE_MAP[ext];

    return <AceEditor value={file.value} mode={mode} />;
  }
});
