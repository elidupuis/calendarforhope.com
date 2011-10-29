$(document).ready(function(){
	jQuery.easing.def = "easeOutExpo";
	
	$('nav a').click(function(){
		var target = $($(this).attr('href'));
		$(document).scrollTo(target, 750, {offset:-20});		
		return false;
	});

  // fixed nav
  $('nav ul').stickybox({
    offset: 10
  });

	//  thanks modal
	if (window.location.hash === '#thanks') {
	  window.location.hash = '';
	  // var modal = $('<div id="thanks-modal">').html('<p><em>Thanks for donating and supporting such a great cause. You\'re awesome!</em></p><p>We\'ll get your order in mail as soon as possible.</p><p><a class="close" href="#">Close this message &raquo;</a></p>');
	  var modal = $('<div id="thanks-modal">').html('<p><em>Thanks for ordering calendar(s)!</em></p><p>They\'ll be hot off the press November 8th, and we\'ll be shipping them Novemeber 9th.</p><p><a class="close" href="#">Close this message &raquo;</a></p>');
	  $('body').append(modal);
	  modal.find('a').bind('click', function(){
	    modal.remove();
	    return false;
	  });
	};

	
});