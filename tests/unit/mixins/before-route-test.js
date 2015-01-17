import Ember from 'ember';
import BeforeRouteMixin from 'ember-cli-i18n-route/mixins/before-route';

module('BeforeRouteMixin');

// Replace this with your real tests.
test('it works', function() {
  var BeforeRouteObject = Ember.Object.extend(BeforeRouteMixin);
  var subject = BeforeRouteObject.create();
  ok(subject);
});
