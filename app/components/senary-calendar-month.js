import Ember from 'ember';
/* global moment */

export default Ember.Component.extend({
  didInsertElement: function() {
    var d = moment.utc([this.get('year'), this.get('month')]);
    var x = makeDatesOfMonth(d.year(), d.month());
    this.set('datesOfMonth', x);
    this.set('labelOfMonth', moment.months(this.get('month')));
  },

  classNames: ['calendar'],
  datesOfMonth: null,
  labelOfMonth: null,
  month: null,
  year: null,
  yearDidChange: function() {
    Ember.run.scheduleOnce('afterRender', this, 'rerender');
  }.observes('year')
});

function endOfMonth(year, month) {
  if (month === 1 && moment([year, month]).isLeapYear()) {
    return 29;
  }
  return [30, 28, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29][month];
}

function makeDatesOfMonth(year, month) {
  var dates = [];
  var l = endOfMonth(year, month);
  var m = moment([year, month]);

  for (var i = 0; i <= l; i++) {
    dates.push({num:i, str:m.format('YYYY-MM-DD')});
    m.add(1, 'days');
  }
  return dates;
}
