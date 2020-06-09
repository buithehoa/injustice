// ==UserScript==
// @name codementor.io
// @version 0.1.1
// @description Open requests in new tab
// @match *://www.codementor.io/m/dashboard/open-requests*
// @require https://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

$(document).ready(function() {
  var selector = 'a.dashboard__open-question-item';
  setTimeout(function() {
    if ($(selector).length) {
      $(selector).click(function(e) {
        e.preventDefault();

        var url = $(this).attr('href');
        window.open(url, '_blank');
      });
    }
  }, 2000);
  
  setInterval(function() {
    $(".request-filter__refresh-btn").click();
  }, 2 * 60 * 1000);
});
