/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
  displayName: 'Sandbox',

  render: function() {
    return <div className="sandbox">
      <section className="pane" id="editor-pane">
        <header>
          <h1 className="pane-title">Editor</h1>
        </header>
        <main>
        </main>
      </section>
      <section className="pane" id="viewer-pane">
        <header>
          <h1 className="pane-title">Viewer</h1>
        </header>
        <main>
        </main>
      </section>
    </div>;
  }
});
