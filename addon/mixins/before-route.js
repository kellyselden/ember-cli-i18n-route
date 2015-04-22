import Ember from 'ember';

export default Ember.Mixin.create({
  beforeModel: function() {
    this.transitionToLocale(this.get('localeRoute') || 'home');

    return this._super.apply(this, arguments);
  },
  transitionToLocale: function(routeName) {
    this.transitionTo(routeName, this.container.lookup('application:main').defaultLocale);
  }
});
