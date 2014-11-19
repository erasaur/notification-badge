Package.describe({
  name: 'erasaur:notification-badge',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('erasaur:notification-badge.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('erasaur:notification-badge');
  api.addFiles('erasaur:notification-badge-tests.js');
});
