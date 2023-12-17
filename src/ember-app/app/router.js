import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-generaciya8-настр-l');
  this.route('i-i-s-generaciya8-настр-e',
  { path: 'i-i-s-generaciya8-настр-e/:id' });
  this.route('i-i-s-generaciya8-настр-e.new',
  { path: 'i-i-s-generaciya8-настр-e/new' });
  this.route('i-i-s-generaciya8-опр-l');
  this.route('i-i-s-generaciya8-опр-e',
  { path: 'i-i-s-generaciya8-опр-e/:id' });
  this.route('i-i-s-generaciya8-опр-e.new',
  { path: 'i-i-s-generaciya8-опр-e/new' });
  this.route('i-i-s-generaciya8-сотр-l');
  this.route('i-i-s-generaciya8-сотр-e',
  { path: 'i-i-s-generaciya8-сотр-e/:id' });
  this.route('i-i-s-generaciya8-сотр-e.new',
  { path: 'i-i-s-generaciya8-сотр-e/new' });
  this.route('i-i-s-generaciya8-форми-l');
  this.route('i-i-s-generaciya8-форми-e',
  { path: 'i-i-s-generaciya8-форми-e/:id' });
  this.route('i-i-s-generaciya8-форми-e.new',
  { path: 'i-i-s-generaciya8-форми-e/new' });
});

export default Router;
