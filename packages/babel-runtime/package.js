Package.describe({
  name: "babel-runtime",
  summary: "Runtime support for output of Babel transpiler",
  version: '1.5.0-alpha190.10',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.use("modules");
  api.mainModule("babel-runtime.js");
});
