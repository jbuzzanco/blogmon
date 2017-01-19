import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save(){
      console.log("post is ", this.get('post'));
      this.sendAction('edit', this.get('post'));

    },
    cancel(){
      this.sendAction('cancel', this.get('post'));

    }
  }
});


// import Ember from 'ember';
//
// export default Ember.Route.extend({
//   model(params) {
//     return this.get('store').findByRecord('post', params.post_id);
//   },
//     edit(post, params){
//       post.findByRecord('post', params.post.id);
//       post.save('post');
//
//     }
//
// });
