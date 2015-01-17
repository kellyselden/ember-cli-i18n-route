import Ember from 'ember';

export default Ember.Mixin.create({
  model: function(params, transition) {
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
      var routeModel;
      ((routeModel = { })[routeName || 'home'] = { })[paramName || 'locale'] = locale;
      this.transitionToDynamic(currentRouteName, routeModel);
    }
  }
});
