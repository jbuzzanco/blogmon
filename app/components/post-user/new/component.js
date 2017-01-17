import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    actions: {
      save() {
          this.sendAction('save', this.get('post'));
        },
      cancel() {
        this.transitionTo('posts');
      },
    },
  }
});
