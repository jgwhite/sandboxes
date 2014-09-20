import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ace-editor',

  createEditor: function() {
    var element = this.get('element');
    var editor  = ace.edit(element);

    this.set('editor', editor);
  }.on('didInsertElement'),

  destroyEditor: function() {
    var editor = this.get('editor');

    editor.destroy();
  }.on('willDestroyElement'),

  updateTheme: function() {
    var editor = this.get('editor');
    var theme  = this.get('theme');

    if (editor && theme) {
      editor.setTheme('ace/theme/' + theme);
    }
  }.observes('editor', 'theme'),

  updateMode: function() {
    var editor  = this.get('editor');
    var mode    = this.get('mode');

    if (editor && mode) {
      var session = editor.getSession();

      session.setMode('ace/mode/' + mode);
    }
  }.observes('editor', 'mode')
});
