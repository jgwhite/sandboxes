/** @jsx React.DOM */

var React = require('react');
var AceEditor = require('./ace-editor');

module.exports = React.createClass({
  displayName: 'File',

  render: function() {
    return <div>
      <AceEditor />
    </div>;
  }
});
