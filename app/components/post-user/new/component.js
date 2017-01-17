import Ember from 'ember';

export default Ember.Component.extend({
  user: Ember.computed.alias('auth.credentials.email'),
  actions: {
    actions: {
      save() {
          const newPost = this.get('store').createRecord('post', this.currentModel);
          newPost.save().then((post) => {
            this.transitionTo('post', post);
          });
        },
      cancel() {
        this.transitionTo('posts');
      },
    },
  }
});
