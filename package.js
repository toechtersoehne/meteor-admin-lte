// Based off of atmosphere package mfactory:admin-lte
//   original src code: https://github.com/meteor-factory/meteor-admin-lte/
//   original version: v0.0.2
//   changes:
//     this is the tip of the official github repo which was not and will not be published to atmosphere, it removes an unused dependency to bootstrap which can cause issues


Package.describe({
  name: 'mfactory-admin-lte',
  version: '1.0.0',
  summary: 'Mfactory\'s AdminLTE dashboard theme (unpublished tip of offical github repo)',
  git: 'https://github.com/toechtersoehne/mfactory-admin-lte',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use([
    'templating',
    'reactive-var'
  ], 'client');

  api.addFiles([
    'admin-lte.html',
    'admin-lte.js'
  ], 'client');

  api.addFiles([
    'css/AdminLTE.min.css',
    'css/skins/skin-black-light.min.css',
    'css/skins/skin-black.min.css',
    'css/skins/skin-blue-light.min.css',
    'css/skins/skin-blue.min.css',
    'css/skins/skin-green-light.min.css',
    'css/skins/skin-green.min.css',
    'css/skins/skin-purple-light.min.css',
    'css/skins/skin-purple.min.css',
    'css/skins/skin-red-light.min.css',
    'css/skins/skin-red.min.css',
    'css/skins/skin-yellow-light.min.css',
    'css/skins/skin-yellow.min.css'
  ], 'client', { isAsset: true });
});
