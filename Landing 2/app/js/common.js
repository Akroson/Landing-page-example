$(function() {
	function showSection(section) {
		var direction = section.replace('#',''),
		reqSelection = $('section, header, footer').filter('[data-section='+ direction +']')
		reqSelectionPos = reqSelection.offset().top;

		$('html, body').animate({scrollTop: reqSelectionPos}, 500)
	}

	$(".main-nav__list .list-item__link").on('click', function(e){
		e.preventDefault()
		showSection($(this).attr('href'))
	})
//-----	
	$('.gallery-item__elem').on('click', function(e) {
		
	})
	
	var visible = false;

	$('.search-link').on('click', function(e) {
		e.preventDefault();

		if (!visible) {
			$('.serach-form__wrap').show();
			$('.search-form__area').focus();
		} else {
			$('.search-form__area').blur(function(e) {
				$('.serach-form__wrap').hide();
			})
		}

		visible = !visible;
	})

	$('.search-form__area').blur(function(e) {
		$('.serach-form__wrap').hide();
	})
//----------------------------
	$('.teams-item__elem a').on('click', function(e) {
		if($('.teams-item__elem .elem-mask').css('opacity') != 1) {
			return false;
		}
	})
//-----------------------------
	function addAcardeon() {
		$('.accordeon__trigger').on('click', function(e) {
			e.preventDefault();

			var $this = $(this),
				item = $this.closest('.accordeon__item'),
				list = $this.closest('.accordeon__list'),
				items = list.find('.accordeon__item'),
				content = item.find('.accordeon__inner'),
				otherContent = list.find('.accordeon__inner'),
				itemArrow = item.find('.trigger-arrow i'),
				itemsArrow = items.find('.trigger-arrow i'),
				duration = 300;

				if(!item.hasClass('active')){
					items.removeClass('active')
					item.addClass('active');
					itemsArrow.attr('class', 'icon-angle-down')
					itemArrow.removeClass()
					itemArrow.addClass('icon-angle-up')


					otherContent.stop(true,true).slideUp(duration);
					content.stop(true,true).slideDown(duration);
				} else {
					content.stop(true,true).slideUp(duration);
					item.removeClass('active')
					itemArrow.removeClass('icon-angle-up')
					itemArrow.addClass('icon-angle-down')
				}
		});

		$('.accordeon__item:first-child .accordeon__trigger').trigger('click');
	};
	
	addAcardeon();
//--------------------------
	$('.first-coments__wrap').slick({
		prevArrow: '<i class="icon-angle-left"><i>',
		nextArrow: '<i class="icon-angle-right"><i>'
	});

	$('.our-works__carousel').slick({
		prevArrow: '<i class="icon-angle-left"><i>',
		nextArrow: '<i class="icon-angle-right"><i>'
	})
//----------------------------
	function heightFullHeightItem() {
		var winWidth = $(window).width();

		if(winWidth > 769  && winWidth < 1200) {
			$('.gallary__full-height-item').css('height', function() {
				return $('.gallary__item-wrap').css('height')
			})
		} else if(winWidth < 769) {
			$('.gallary__full-height-item').css('height', function() {
				return $('.sss').css('height')
			})
		} else {
			$('.gallary__full-height-item').css('height','100%')
		}
	}

	heightFullHeightItem()

	$(window).resize(function(){
		heightFullHeightItem();
	})
//--------------------------------
});
