
Package.describe({
  name: 'extensionengine:assessments',
  version: '0.0.1',
  summary: 'Talc assessments',
  git: 'https://github.com/ExtensionEngine/assessments',
  documentation: 'README.md'
});


Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');

  api.use(['templating', 'coffeescript']);
  api.use(['peerlibrary:blaze-components@0.13.0']);
  api.use(['zeroasterisk:s-enum@1.0.2']);

  api.addFiles('lib/components/editor/types.coffee');
  api.addFiles('lib/components/editor/editor.coffee');

  api.export("AssessmentEditor");
  api.export("AssessmentType");
  api.export("MultipleChoiceEditor");
  api.export("Operation");

  api.addFiles('lib/components/editor/multiple-choice/multiple-choice.coffee');
  api.addFiles('lib/components/editor/multiple-choice/create-option.html');
  api.addFiles('lib/components/editor/multiple-choice/question-input.html');
  api.addFiles('lib/components/editor/multiple-choice/single-answer/single-answer.html');
  api.addFiles('lib/components/editor/multiple-choice/single-answer/single-answer.coffee');
});

Package.onTest(function(api) {
  api.use('tinytest');
});
