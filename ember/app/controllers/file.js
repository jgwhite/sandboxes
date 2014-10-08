import Ember from 'ember';

var MODE_MAP = {
  hbs: 'handlebars',
  js: 'javascript'
};

export default Ember.ObjectController.extend({
  mode: function() {
    var name = this.get('name');

    if (name) {
      var ext = name.split('.')[1];

      return MODE_MAP[ext];
    }
  }.property('name')
});
