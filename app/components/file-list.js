import Ember from 'ember';
const { shell } = window.requireNode('electron');

export default Ember.Component.extend({
  classNameBindings: [':file-list'],
  actions: {
    openFile(file) {
      shell.openItem(file);
    }
  }
});
