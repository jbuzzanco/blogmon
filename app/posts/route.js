import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    console.log("Is this running?");
    return this.get('store').findAll('post');
  },
  actions: {
    delete(post) {
      post.deleteRecord();
      post.save();
    }
  }
});
