import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [{
      name: 'router.js',
      value: "import Ember from 'ember';\n\n" +
             "var Router = Ember.Router.extend();\n\n" +
             "Router.map(function() {\n});\n\n" +
             "export default Router;\n"
    }, {
      name: 'templates/application.hbs',
      value: 'Hello, World\n'
    }];
  },

  actions: {
    chooseFile: function(file) {
      var controller = this.get('controller');
      controller.set('currentFile', file);
    }
  }
});
