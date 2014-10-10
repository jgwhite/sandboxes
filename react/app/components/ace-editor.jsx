/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
  displayName: 'AceEditor',

  render: function() {
    return <div />;
  },

  componentDidMount: function() {
    var element = this.getDOMNode();
    var editor  = ace.edit(element);

    this.editor = editor;

    this.componentDidUpdate();
  },

  componentDidUpdate: function() {
    this.updateTheme();
    this.updateMode();
    this.updateValue();
  },

  componentWillUnmount: function() {
    var editor = this.editor;

    editor.destroy();
  },

  updateTheme: function() {
    var editor = this.editor;
    var theme  = this.props.theme;

    if (editor && theme) {
      editor.setTheme('ace/theme/' + theme);
    }
  },

  updateMode: function() {
    var editor = this.editor;
    var mode   = this.props.mode;

    if (editor && mode) {
      var session = editor.getSession();

      session.setMode('ace/mode/' + mode);
    }
  },

  updateValue: function() {
    var editor = this.editor;
    var value  = this.props.value;

    if (editor && value) {
      editor.setValue(value);
      editor.clearSelection();
      editor.moveCursorTo(0, 0);
    }
  }
});
