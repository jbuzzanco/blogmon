// import Ember from 'ember';
//
// export default Ember.Component.extend({
//   classNames: ['blogmon'],
//   listDetailHidden: false,
//   newPost: {
//     content: null,
//     done: false,
//   },
//   actions: {
//     toggleListDetail () {
//       return this.toggleProperty('listDetailHidden');
//     },
//     toggleItemDone (item) {
//       this.sendAction('toggleItemDone', item);
//     },
//     deleteItem (item) {
//       this.sendAction('deleteItem', item);
//     },
//     createList () {
//       console.log('inside of createItem, newItem is', this.get('newItem'));
//       let data = this.get('newPost');
//       data.list = this.get('posts');
//
//       this.sendAction('createPost', this.get('newPost'));
//     },
//
//   },
// });
