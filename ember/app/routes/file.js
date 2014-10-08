import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var files = this.modelFor('application');
    return files.findBy('name', params.file_id);
  },

  serialize: function(model) {
    return { file_id: model.name };
  }
});
