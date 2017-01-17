import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    this.get('store').createRecord('post', {});
    return {};
  },
  actions: {
    createPost(post) {
      post.save();
      },
    cancelcreatePost(post) {
      post.rollbackAttributes;
      this.transitionTo('posts');
    },
  },
});
