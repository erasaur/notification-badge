Package.describe({
  name: 'erasaur:notification-badge',
  summary: 'Simple, Animated Notification Badge Template for Meteor',
  version: '0.0.0',
  git: 'https://github.com/erasaur/notification-badge'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('lib/erasaur:notification-badge.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('erasaur:notification-badge');
  api.addFiles('tests/erasaur:notification-badge-tests.js');
});
