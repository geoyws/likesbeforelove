function login () {
  $(function () {
    FB.init({
      appId: 1027803050567274,
      frictionlessRequests: true,
      status: true,
      xfbml: false,
      version: 'v2.0'
    });

    FB.Event.subscribe('auth.authResponseChange', onAuthResponseChange);
    FB.Event.subscribe('auth.statusChange', onStatusChange);
  });
}

