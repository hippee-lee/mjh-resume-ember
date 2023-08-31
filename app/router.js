import EmberRouter from '@ember/routing/router';
import config from 'mjh-resume/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('education', { path: '/edu' });
  this.route('experience', { path: '/exp' });
  this.route('speaking', { path: '/talk' });
  this.route('workshops');
  this.route('leadership', { path: '/lead' });
  this.route('community');
});
