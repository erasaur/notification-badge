Package.describe({
  name: 'erasaur:notification-badge',
  summary: 'Simple, Animated Notification Badge Template for Meteor',
  version: '0.0.6',
  git: 'https://github.com/erasaur/notification-badge'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.1');
  api.use(['templating', 'jquery'], 'client');

  api.addFiles([
    'lib/notification-badge.html', 
    'lib/notification-badge.js', 
    'lib/notification-badge.css'
  ], ['client']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('erasaur:notification-badge');
  api.addFiles('tests/notification-badge-tests.js');
});
