// Based off of atmosphere package mfactory:admin-lte
//   original src code: https://github.com/meteor-factory/meteor-admin-lte/
//   original version: v0.0.2
//   changes:
//     1) changed css asset namespace to match package name (toechterundsoehne_mfactory-admin-lite)
//     2) added google fonts locally

Package.describe({
    name: 'toechterundsoehne:mfactory-admin-lte',
    version: '1.0.4',
    summary: 'Mfactory\'s AdminLTE dashboard theme (unpublished tip of offical github repo)',
    git: 'https://github.com/toechtersoehne/mfactory-admin-lte',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.use([
        'templating@1.3.2',
        'reactive-var@1.0.11'
    ], 'client');


    api.addFiles([
        'admin-lte.html',
        'admin-lte.js'
    ], 'client');

    //2018-07-02-jc adding google fonts locally [AOK-292]
    //reference via /packages/toechterundsoehne_mfactory-admin-lte/fonts/<font-name>.woff
    api.addFiles([
        'fonts/source-sans-pro-v11-latin-300.woff2',
        'fonts/source-sans-pro-v11-latin-300.woff',
        'fonts/source-sans-pro-v11-latin-300italic.woff2',
        'fonts/source-sans-pro-v11-latin-300italic.woff',
        'fonts/source-sans-pro-v11-latin-regular.woff2',
        'fonts/source-sans-pro-v11-latin-regular.woff',
        'fonts/source-sans-pro-v11-latin-italic.woff2',
        'fonts/source-sans-pro-v11-latin-italic.woff',
        'fonts/source-sans-pro-v11-latin-600.woff2',
        'fonts/source-sans-pro-v11-latin-600.woff',
        'fonts/source-sans-pro-v11-latin-600italic.woff2',
        'fonts/source-sans-pro-v11-latin-600italic.woff',
        'fonts/source-sans-pro-v11-latin-700.woff2',
        'fonts/source-sans-pro-v11-latin-700.woff'
    ], 'client', {
        isAsset: true
    });

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
