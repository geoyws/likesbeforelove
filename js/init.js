// Load JS files asynchronously
var scripts = [
  'js/config.js',
  'js/models.js',
  'js/fb.js',
  '//connect.facebook.net/en_US/sdk.js'
];

for (var i = 0; i < scripts.length; i++) {
  var firstScriptTag = document.getElementsByTagName('script')[0];
  var scriptTag = document.createElement('script');
  scriptTag.src = scripts[i];
  scriptTag.async = true;
  firstScriptTag.parentNode.insertBefore(scriptTag, firstScriptTag);
}
