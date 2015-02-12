/* std stands for Standard Models */

var std = {
  appendOnce: function (selector, element, content) {
    var newElement = document.createElement(element);
    newElement.innerHTML = content;
    document.querySelectorAll(selector)[0].appendChild(newElement);
  },
  appendAll: function (selector, element, content) {
    var newElement = document.createElement(element);
    newElement.innerHTML = content;
    var array = document.querySelectorAll(selector);
    for (var i = 0; i < array.length; i++) {
      array[i].appendChild(newElement);
    }
  },
  toast: function (string) {
    // create a fixed position element that floats on the top right corner stating a short toast of 3 seconds, dismissible upon click.
    var content = string;
    std.appendOnce('body', 'toast-notification', content);
  },
  ajax: function (requestType, url, requestBody) {
    var requestObj = false;
    var response = false;
    if (window.Promise) {
      var ajaxPromise = new Promise(function (resolve, reject) {
	if (window.XMLHttpRequest) {
	  requestObj = new XMLHttpRequest();
	} else
	if (window.ActiveXObject) {
	  requestObj = new ActiveXObject('Microsoft.XMLHTTP');
	} else {
	  std.toast('Your browser does not support AJAX. This app requires AJAX to function.');
	}
	requestObj.onreadystatechange = function () {
	  if (requestObj.readyState == 4 && requestObj.status == 200) {
	    requestObj.res = requestObj.responseText;
	  } else {
	    std.toast("There was an error with your AJAX request.");
	  }
	  requestObj.open(requestType, graphApi + url);
	  requestObj.send();
	};
      };
    });
    return requestObj;
  },
  getLikes: function (finalistUrl) {
    // do ajax
    var res = std.ajax("GET", finalistUrl + "/insights/page_fans");
    return res;   
  },
  getPosts: function (finalistUrl) {
    // do ajax
    var res = std.ajax("GET", finalistURL + '/feed?filter=app_2305272732&limit=1');
    return result;
  },
  renderLikes: function (obj) {
    // render here using pure js calling lbl.getLikes
    var data = [];
    for (var i = 0; i < obj.length; i++) {
      std.getLikes(obj[i]).push(data);
    }
  },
  renderPosts: function () {
    // render here using pure js calling lbl.getPosts
  }
};


