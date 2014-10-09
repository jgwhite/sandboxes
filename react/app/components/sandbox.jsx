/** @jsx React.DOM */

var React = require('react');
var AceEditor = require('./ace-editor');

module.exports = React.createClass({
  displayName: 'Sandbox',

  render: function() {
    return <div className="sandbox">
      <div className="pane" id="browser-pane">
        <header>
          <h1 className="pane-title">Files</h1>
        </header>
        <main>
          <ul className="file-list">
          </ul>
        </main>
      </div>

      <div className="pane" id="editor-pane">
        <header>
          <h1 className="pane-title">Editor</h1>
        </header>
        <main>
          <this.props.activeRouteHandler />
        </main>
      </div>

      <div className="pane" id="viewer-pane">
        <header>
          <h1 className="pane-title">Viewer</h1>
        </header>
        <main>
        </main>
      </div>
    </div>
  }
});
