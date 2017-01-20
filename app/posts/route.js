import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.get('store').findAll('post');
  },
  actions: {
    delete(post) {
      post.deleteRecord();
      post.save();
    },
    edit(post){
      console.log('youre at posts route. your ppost is ', post);
      post.save();
    },
    cancel(post){
      post.rollbackAttributes();
      this.transitionTo('posts');
    },
    willTransition(){
      // console.log('insideWillTransition');
      this.get('store').peekAll('post').forEach(function(post){

        // console.log("post.get('hasDirtyAttributes');",   post.get('hasDirtyAttributes'));
        if (post.get('hasDirtyAttributes')) {
          post.rollbackAttributes();
        }
      });

    }
  },
});
