import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr('string'),
  body: DS.attr('string'),
  // post: DS.attr('references'),
  // belongsTo may be wrong, may need to be references
  post: DS.belongsTo('post')
});
