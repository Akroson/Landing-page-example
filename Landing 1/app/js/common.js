$(function() {
	var wow = new WOW({
		boxClass:'wow',
		animateClass:'animated',
		offset:0,
		mobile:false,
		live:true
	})
	wow.init();

	$('#my-menu').mmenu({
		extensions:['theme-dark', 'pagedim-black'],
		offCanvas: {
			position:'right'
		},
	});

	var api = $('#my-menu').data( 'mmenu' );

	api.bind( 'open:finish', function() {
		$('.hamburger').addClass('is-active');
	});
	api.bind( 'close:finish', function() {
		$('.hamburger').removeClass('is-active');
	});

	function addAnimateClass() {
		$('.timeline-img').attr('data-wow-duration', '0.4s').addClass('wow zoomIn');
		$('.teams-person, .services-item').addClass('wow slideInUp')

		$('.timeline-content').each(function(i) {
			if((i + 1) % 2 == 0) {
				$(this).addClass('wow slideInRight');
			} else {
				$(this).addClass('wow slideInLeft');
			}
		});
	};
	addAnimateClass();


	function showSection(section, isAnimate) {
		var direction = section.replace(/#/, ''),
		reqSelection = $('section, header, footer').filter('[data-section="'+ direction +'"]'),
		reqSelectionPos = reqSelection.offset().top;

		if(isAnimate) {
			$('body, html').animate({scrollTop: reqSelectionPos}, 500);
		} else {
			setTimeout(function(){
				$('body, html').scrollTop(reqSelectionPos)
			},500)		
		}
	}

	$('.list-item__link').on('click', function(e){
		e.preventDefault();
		showSection($(this).attr('href'), true);
	})

	$('.my-menu__link').on('click', function(e) {
		e.preventDefault();
		showSection($(this).attr('href'), false);
	})
});
