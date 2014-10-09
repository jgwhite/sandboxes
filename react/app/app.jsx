/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Sandbox = require('./components/sandbox');
var File = require('./components/file');
var Route = Router.Route;
var Routes = Router.Routes;

React.renderComponent((
  <Routes location="history">
    <Route name="application" path="/" handler={Sandbox}>
      <Route name="file" path="/:fileId" handler={File} />
    </Route>
  </Routes>
), document.body);
