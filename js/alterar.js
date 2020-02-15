$(document).ready(function() {

 if($.cookie("contrast-bar")) {setActiveStyleSheet($.cookie("contrast-bar"));}

 $('#click').click(function(e) {
   e.preventDefault();
   if ( getActiveStyleSheet() == '1') {
     setActiveStyleSheet('2');
   } else {
     setActiveStyleSheet('1');
   }
 });
});

function setActiveStyleSheet(title) {
 var i, a, main;
 for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {

   if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
     a.disabled = true;
     if(a.getAttribute("title") == title) a.disabled = false;
   }
 }
 $.cookie("contrast-bar",title, {expires: 365, path: '/'});
}

function getActiveStyleSheet() {
 var i, a;
 for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
   if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) return a.getAttribute("title");
 }
 return null;
}

function getPreferredStyleSheet() {
 var i, a;
 for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
   if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("rel").indexOf("alt") == -1 && a.getAttribute("title")) return a.getAttribute("title");
 }
 return null;
}

jQuery.cookie = function(name, value, options) {
if (typeof value != 'undefined') { // name and value given, set cookie
  options = options || {};
  if (value === null) {
    value = '';
    options.expires = -1;
  }
  var expires = '';
  if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
    var date;
    if (typeof options.expires == 'number') {
      date = new Date();
      date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
    } else {
      date = options.expires;
    }
expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
}
// CAUTION: Needed to parenthesize options.path and options.domain
// in the following expressions, otherwise they evaluate to undefined
// in the packed version for some reason...
var path = options.path ? '; path=' + (options.path) : '';
var domain = options.domain ? '; domain=' + (options.domain) : '';
var secure = options.secure ? '; secure' : '';
document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
} else { // only name given, get cookie
  var cookieValue = null;
  if (document.cookie && document.cookie != '') {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = jQuery.trim(cookies[i]);
// Does this cookie string begin with the name we want?
if (cookie.substring(0, name.length + 1) == (name + '=')) {
  cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
  break;
}
}
}
return cookieValue;
}
};// JavaScript Document