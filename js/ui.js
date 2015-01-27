function renderWelcome() {
  var welcome = $('#welcome');
  welcome.find('.first-name').html(friendCache.me.first_name);
  welcome.find('.profile').attr('src', friendCache.me.picture.data.url);
}
