$(document).ready(function(){

	//  thanks modal
	if (window.location.hash === '#thanks') {
	  window.location.hash = '';
    // var modal = $('<div id="thanks-modal">').html('<p><em>Thanks for donating and supporting such a great cause. You\'re awesome!</em></p><p>Your order will be shipped within 2 business days. Please allow 3-5 days for regular postal delivery (in Canada).</p><p><a class="close" href="#">Close this message &raquo;</a></p>');
    var modal = $('<div id="thanks-modal">').html('<p><em>Thanks for ordering calendar(s)!</em></p><p>They\'ll be hot off the press in late October, and we\'ll be shipping them in early Novemeber.</p><p><a class="close" href="#">Close this message &raquo;</a></p>');
	  $('body').append(modal);
	  modal.find('a').bind('click', function(){
	    modal.remove();
	    return false;
	  });
	};


});
