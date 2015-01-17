import Ember from 'ember';
import LocaleRouteMixin from 'ember-cli-i18n-route/mixins/locale-route';

module('LocaleRouteMixin');

// Replace this with your real tests.
test('it works', function() {
  var LocaleRouteObject = Ember.Object.extend(LocaleRouteMixin);
  var subject = LocaleRouteObject.create();
  ok(subject);
});
