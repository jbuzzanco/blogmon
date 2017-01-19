import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');

  this.route('posts');
  this.route('post.new', { path: 'posts/new' });
  // this.route('post.edit', { path: 'post/:id/edit'})
  this.resource('post', { path: 'posts/:post_id' }, function() {
    this.route('comment.new', { path: 'comments/new' });
  });
});


export default Router;
