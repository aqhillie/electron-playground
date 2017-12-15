import Ember from 'ember';
const os = window.requireNode('os');

export default Ember.Component.extend({
  appName: `Desktop for ${os.userInfo().username}`
});
