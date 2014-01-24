(function ($, window, document, undefined) {

  'use strict';

var today = new Date().getHours();

if (today >= 7 && today <= 19) {
   $('body').addClass('day');
   $('#timeIcon').addClass('fa-sun-o');
} else {
   $('body').addClass('night');
   $('#timeIcon').addClass('fa-moon-o');
}

var $noScroll = $('.animated').bind('webkitAnimationEnd', function(){
    $('body').removeClass('noscroll');
});

})(jQuery, window, document);

