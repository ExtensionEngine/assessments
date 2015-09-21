
Package.describe({
  name: 'extensionengine:assessments',
  version: '0.0.1',
  summary: 'Assessment creation and inputs',
  git: 'https://github.com/ExtensionEngine/assessments',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');

  api.use(['coffeescript', 'templating']);
  api.use(['peerlibrary:blaze-components@0.13.0']);

  api.addFiles('lib/components/editor/base/assessment-editor.html');
  api.addFiles('lib/components/editor/base/assessment-editor.coffee');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('extensionengine:assessments');
});
