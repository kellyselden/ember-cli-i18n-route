import Ember from 'ember';
import getLocales from 'ember-cli-i18n-locales/utils/get-locales';

export default Ember.Mixin.create({
  model: function(params, transition) {
    if (getLocales().indexOf(params.locale) === -1) {
      this.transitionTo('/' + this.container.lookup('application:main').defaultLocale + window.location.pathname);
    }
    if (params.locale) {
      transition.send('updateLocale', params.locale);
    }
    return this._super.apply(this, arguments);
  },
  actions: {
    updateLocale: function(locale) {
      Ember.run.scheduleOnce('afterRender', this, function() {
        this.container.lookup('application:main').set('locale', locale);
      });
    },
    changeLocale: function(locale, routeName, paramName) {
      var currentRouteName = this.controllerFor('application').get('currentRouteName');
      var routeModel = { };
      (routeModel[routeName || 'home'] = { })[paramName || 'locale'] = locale;
      this.transitionToDynamic(currentRouteName, routeModel);
    }
  }
});
