$(document).ready(function(){
	jQuery.easing.def = "easeOutExpo";
	
	$('#nav a').click(function(){
		var target = $($(this).attr('href'));
		$(document).scrollTo(target, 750, {offset:-20});		
		return false;
	});
	
  // $('.zoom').imgbox({
  //  'zoomOpacity' : true,
  //  'alignment' : 'center'
  // });
	
	
	//	http://jqueryfordesigners.com/fixed-floating-elements/
	var msie6 = $.browser == 'msie' && $.browser.version < 7;
	if (!msie6) {
		var top = $('#nav').offset().top - parseFloat($('#nav').css('margin-top').replace(/auto/, 0));
		$(window).scroll(function (event) {
			// what the y position of the scroll is
			var y = $(this).scrollTop();

			// whether that's below the form
			if (y >= top-5) {
				// if so, ad the fixed class
				$('#nav').addClass('fixed');
			} else {
				// otherwise remove it
				$('#nav').removeClass('fixed');
			}
		});
	}
	
	//  thanks modal
	if (window.location.hash === '#thanks') {
	  window.location.hash = '';
	  var modal = $('<div id="thanks-modal">').html('<p><em>Thanks for donating and supporting such a great cause. You\'re awesome!</em></p><p>We\'ll get your order in mail as soon as possible.</p><p><a class="close" href="#">Close this message &raquo;</a></p>');
	  $('body').append(modal);
	  modal.find('a').bind('click', function(){
	    modal.remove();
	    return false;
	  });
	};

	
});