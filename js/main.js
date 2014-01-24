(function ($, window, document, undefined) {

  'use strict';

var today = new Date().getHours();

if (today >= 7 && today <= 19) {
   $('body').addClass('day');
} else {
   $('body').addClass('night');
}

})(jQuery, window, document);

