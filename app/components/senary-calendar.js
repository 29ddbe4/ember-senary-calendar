import Ember from 'ember';

export default Ember.Component.extend({
  isToday: function() {
    return this.get('visibleYear') === Number(new Date().getFullYear()) ? true : false;
  }.property('visibleYear'),
  months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  visibleYear: null,

  actions: {
    gotoToday: function() {
      this.set('visibleYear', new Date().getFullYear());
    },
    nextYear: function() {
      this.incrementProperty('visibleYear');
    },
    previousYear: function() {
      this.decrementProperty('visibleYear');
    }
  }
});
