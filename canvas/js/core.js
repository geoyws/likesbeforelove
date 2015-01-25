$(function () {
  FB.init({
    appId: 1027803050567274,
    frictionlessRequests: true,
    status: true,
    version: 'v2.1'
  });

  FB.Event.subscribe('auth.authResponseChange', onAuthResponseChange);
  FB.Event.subscribe('auth.statusChange', onStatusChange);
});

