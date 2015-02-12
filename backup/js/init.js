// Load JS files asynchronously
// this is not wise because it still has the same amount of files called with even more HTTP requests
// just download the facebook sdk if doing it for a mobile app, otherwise do it CDN style



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
