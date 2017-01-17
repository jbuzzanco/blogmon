import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {};
  },
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
});
