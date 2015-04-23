import Ember from 'ember';
import BeforeRouteMixin from 'ember-cli-i18n-route/mixins/before-route';
import { module, test } from 'qunit';

module('BeforeRouteMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var BeforeRouteObject = Ember.Object.extend(BeforeRouteMixin);
  var subject = BeforeRouteObject.create();
  assert.ok(subject);
});
