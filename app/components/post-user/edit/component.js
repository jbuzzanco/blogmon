import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    edit(){
      console.log("post is ", this.get('post'));
    }
  }
});
