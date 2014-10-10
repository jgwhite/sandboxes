/** @jsx React.DOM */

var React  = require('react');
var Router = require('react-router');
var Route  = Router.Route;
var Routes = Router.Routes;
var Link   = Router.Link;
var File   = require('./components/file');

var FILES = [{
  name: 'app.jsx',
  value: "/** @jsx React.DOM */\n\n" +
         "var React = require('react');\n\n" +
         "var App = React.createClass({\n" +
         "  render: function() {\n" +
         "    return <div />;\n" +
         "  }\n" +
         "});\n"
}, {
  name: 'style.css',
  value: "html, body {\n" +
         "  font-family: Helvetica, Arial, sans-serif;\n" +
         "}\n"
}];

var App = React.createClass({
  render: function() {
    var files = FILES;

    function linkToFile(file) {
      return (
        <li key={file.name}>
          <Link to="file" params={{ fileId: file.name }}>
            {file.name}
          </Link>
        </li>
      );
    }

    return (
      <div className="sandbox">
        <div className="pane" id="browser-pane">
          <header>
            <h1 className="pane-title">Files</h1>
          </header>
          <main>
            <ul className="file-list">
              {files.map(linkToFile)}
            </ul>
          </main>
        </div>

        <div className="pane" id="editor-pane">
          <header>
            <h1 className="pane-title">Editor</h1>
          </header>
          <main>
            {this.props.activeRouteHandler({ files: files })}
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
    );
  }
});

React.renderComponent((
  <Routes location="hash">
    <Route path="/" handler={App}>
      <Route name="file" path=":fileId" handler={File} />
    </Route>
  </Routes>
), document.body);
