$(function() {
	var d = document;

	var star = new CreateStar({
		el:'.goods-item__rating',
		emptyClass: 'icon-star-empty',
  		fullClass: 'icon-star',
  		rating: 4,
		create: false
	})

	$('.goods-item-wrap-inner').slick({
		infinite: false,
		prevArrow: '<i class="icon-left"><i>',
		nextArrow: '<i class="icon-right"><i>'
	});
	$(".our-team__slider").slick({
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 4,
		prevArrow: '<i class="icon-left"><i>',
		nextArrow: '<i class="icon-right"><i>',
		responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		      }
		    },
		    {
		      breakpoint: 992,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 580,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		]    
	});

	//---------------------
	function showMainImg (target) {
		var len;
		var mainBlock = target.closest(".goods-item")
		var allTarget = mainBlock.querySelectorAll('.goods-item__list-item');
		for(var i = 0, len = allTarget.length; i < len; i++) {
			if(allTarget[i] == target) {
				allTarget[i].classList.add('active');
				mainBlock.querySelector('.goods-item__main-img').setAttribute('src', target.getAttribute('data-src'));
			} else {
				allTarget[i].classList.remove('active');
			}
		}
	}

	function showTabsBody (target) {
		var len;
		var mainBlock = target.closest(".goods-item");
		var	tabsHeader = mainBlock.querySelectorAll('.tab-hader-item-text');
		var	tabsBody = mainBlock.querySelectorAll('.tab-body-item');

		for (var i = 0, len = tabsHeader.length; i < len; i++) {
			if (tabsHeader[i] == target) {
				tabsHeader[i].parentNode.classList.add('active');
				tabsBody[i].style.display = 'block';
			} else {
				tabsHeader[i].parentNode.classList.remove('active');
				tabsBody[i].style.display = 'none';
			}
		}
	}

	function doCall (e) {
		var target = e.target
		if (target.className == 'goods-item__list-item') {
			showMainImg(target)
		} else if (target.className == 'tab-hader-item-text') {
			showTabsBody(target)
		} 	
	}

	function getCount(num) {
		return num < 10 ? '0' + (+num + 1) : +num + 1;	
	} 
	
	var Targ;
	function changeE(e) {
		if (Targ == d.querySelector('.goods-items-wrap .slick-current')) return;
		var allItems = d.querySelectorAll('.goods-item');
		var len;
		for (var i = 0, len = allItems.length; i < len; i++) {
			if(allItems[i].classList.contains('slick-current') && allItems[i].classList.contains('slick-active')) {
				d.getElementById('count-board__curent').innerText = getCount(i);
				Targ = allItems[i];
				return;
			}
		}
	}

	var goodsItemsWrap = d.querySelector('.goods-item-wrap');
	goodsItemsWrap.addEventListener('mousemove', changeE);
	goodsItemsWrap.addEventListener('click', changeE);
	goodsItemsWrap.addEventListener('touchend', setTimeout(changeE, 10));
	d.querySelector('.goods-item-wrap-inner').addEventListener('click', doCall);
	d.getElementById('count-board__total').innerText = getCount(d.querySelectorAll('.goods-item').length - 1);

	//--------------
	var ourTeamSlider = d.querySelector('.our-team__slider'),
		allItems = ourTeamSlider.querySelectorAll('.our-team__item'),
		teamSlickTrack = ourTeamSlider.querySelector('.slick-track').style,
		currentTransform = parseInt(teamSlickTrack.transform.match(/(\d+?)[px]/)[1]),
		multiplier = 0,
		currentSlide = ourTeamSlider.querySelector('.slick-current'),
		MARGIN = checkWidth(),
		maxActiveSlide,
		maxMultiplier,
		residue;

	function checkWidth() {
		var winWidth = window.innerWidth;
		slidersToShow();
		if (winWidth > 1200) {
			return 213;
		} else if (winWidth < 1200 && winWidth > 992) {
			return 252;
		} else if (winWidth < 992 && winWidth > 768) {
			return 270;
		} else if (winWidth < 768 && winWidth > 580) {
			setTranslate()
			return getMarginMiddleScreen(winWidth);
		} else if (winWidth < 580) {
			setTranslate()
			return getMarginSmallScreen(winWidth);
		}
	}

	function slidersToShow() {
		var allItemsLenght = allItems.length;
		var slideShow = ourTeamSlider.querySelectorAll('.our-team__item.slick-active').length;
		maxActiveSlide = slideShow;
		maxMultiplier = Math.floor(allItemsLenght / slideShow);
		residue = allItemsLenght % slideShow;
	}


	//Warning: Magic integer. But I'm sure that, if necessary, you can establish a relationship
	function getMarginMiddleScreen(winWidth) {
		var margin = 270 - (768 - winWidth);
		return margin < 40 ? margin + 0.5 : margin + 1.5
	}

	function getMarginSmallScreen(winWidth) {
		if (winWidth > 336) {
			var margin = 321.5 - (578 - winWidth);
			return margin < 178 ? margin : margin + 0.5;
		} else {
			return 79.5;
		}
	}

	//set translate for centering blocks
	function setTranslate() {
		var len;
			countActiveItems = ourTeamSlider.querySelectorAll('.our-team__item.slick-active').length,
			itemMarginLeft = Math.abs(parseInt(getComputedStyle(allItems[0]).marginLeft)),
			blocWidth = ourTeamSlider.clientWidth;
		var subtractionNumber = ((parseInt(getComputedStyle(allItems[0]).width) + (itemMarginLeft / 2)) * countActiveItems) - (itemMarginLeft * 2);
		var transformParam = (((blocWidth - subtractionNumber) / 2) + (countActiveItems > 1 ? itemMarginLeft : itemMarginLeft / 3)) + 'px';
		for (var i = 0, len = allItems.length; i < len; i++) {
			allItems[i].style.transform = 'translateX(' + transformParam + ')';
		}
	}

	function checkCurrentSlide() {
		var currentTransformNow = parseInt(teamSlickTrack.transform.match(/(\d+?)[px]/)[1]);
		var currentSlideNow = ourTeamSlider.querySelector('.slick-current');
		if (currentSlideNow == currentSlide) return;
		currentSlide = currentSlideNow;
		if (currentTransformNow == currentTransform) {
			multiplier = multiplier;
		} else if (currentTransformNow > currentTransform) {
			multiplier -= 1;
		} else if (currentTransformNow < currentTransform) {
			multiplier += 1;
		} 
		currentTransform = currentTransformNow;
	}

	function hiddItem(e) {
		checkCurrentSlide();
		var margin = MARGIN;
		var currentMultiplier = Math.abs(multiplier ? multiplier : 1);
		var len = allItems.length;
		for (var i = 0; i < len; i++) {
			if (allItems[i].classList.contains('slick-active')) {
				if(i != 0 && !allItems[i - 1].classList.contains('slick-active')) {
					allItems[i - 1].style.marginRight = (currentMultiplier == maxMultiplier ? (margin / maxActiveSlide) * residue : margin) + 'px';
				}
				allItems[i].style.marginRight = '0';
			}
		}
	}

	ourTeamSlider.addEventListener('mousemove', hiddItem)
	ourTeamSlider.addEventListener('click', hiddItem);
	ourTeamSlider.addEventListener('touchend', hiddItem);
	hiddItem();

	$(window).resize(function(){
		//console.log(maxActiveSlide);
		MARGIN = checkWidth();
		currentSlide = ourTeamSlider.querySelector('.slick-current');
		teamSlickTrack = ourTeamSlider.querySelector('.slick-track').style;
		// currentTransform = parseInt(teamSlickTrack.transform.match(/(\d+?)[px]/)[1]);
	})
});
