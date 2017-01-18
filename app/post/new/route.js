import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  user: Ember.computed.alias('auth.credentials.id'),

  model() {
    return {};
  },


  actions: {
    save() {
      let newPost = this.get('store').createRecord('post', this.currentModel);
      // let currentUser = this.get('user_id');

      // newPost = Ember.Object.Extend({
      //   currentUser: function(){
      //     return `$this.get('user_id')}`
      //   }
      // });
      console.log("new post 24 is ", newPost);
      // console.log("user is", this.get('user'));
      //
      // this.get('store').findRecord('user', this.get('user'))
      //   .then((user)=>{
      //     newPost.set('user_id', user);
      //     console.log("new post 26 is ", newPost);
      //
      //   });
      // console.log("new post 28 is ", newPost);

      newPost.save().then((post) => {
        this.transitionTo('post', post);
      });
    },
    cancel() {
      this.transitionTo('posts');
    }
  }
});
