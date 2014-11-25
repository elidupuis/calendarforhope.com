$(document).ready(function(){

	//  thanks modal
	if (window.location.hash === '#thanks') {
	  window.location.hash = '';
    var modal = $('<div id="thanks-modal">').html('<p><em>You\'re awesome!</em></p><p>Calendars ship via Canada Post, please allow 5-7 business days for delivery.</p><p><a class="close" href="#">Close this message &raquo;</a></p>');
	  $('body').append(modal);
	  modal.find('a').bind('click', function(){
	    modal.remove();
	    return false;
	  });
	};


});
