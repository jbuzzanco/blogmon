import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('post', 'user');
  },
  actions: {
    delete(post) {
      post.deleteRecord();
      post.save();
    }
  }
});
