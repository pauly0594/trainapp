// shorthand jQuery for 'onDocumentReady'
$(function() {

  // scroll to top of page per janky iOS bug
  window.scrollTo(0, 1);

  // disable 300ms tap delay on mobile browsers
  FastClick.attach(document.body);

  $('.carousel').carousel({
    interval: 4000
  })

  // make hamburgler link click events close the menu
  $(".mobileNavLink").click(function () {
    $(".mobilenav").fadeToggle(500);
    $(".top-menu").toggleClass("top-animate");
    $(".mid-menu").toggleClass("mid-animate");
    $(".bottom-menu").toggleClass("bottom-animate");
  });

}); // ./end onDocumentReady

/**
 *
 * UTILITY .JS STUFF
 * Only the comments are important, 
 * so you know what each function accomplishes
 *
 */

// disable scalability with javascript until gesturestart event fires // fixes iPad portrait-to-layout scaling bug
if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
  var viewportmeta = document.querySelector('meta[name="viewport"]');
  if (viewportmeta) {
    viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0';
    document.body.addEventListener('gesturestart', function() {
      viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
    }, false);
  }
}

// open new pages in home screen web app on iOS, not in mobile safari
(function(a, b, c) {
  if (c in b && b[c]) {
    var d, e = a.location,
      f = /^(a|html)$/i;
    a.addEventListener("click", function(a) {
      d = a.target;
      while (!f.test(d.nodeName)) d = d.parentNode;
      "href" in d && (d.href.indexOf("http") || ~d.href.indexOf(e.host)) && (a.preventDefault(), e.href = d.href)
    }, !1)
  }
})(document, window.navigator, "standalone")

// allow CSS :active styles to fire on touch events
document.addEventListener("touchstart", function() {}, true);