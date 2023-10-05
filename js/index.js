;(function ($) {
	'use strict';

	$(window).scroll(function (){
		const scrollValue = $(window).scrollTop();
		const Body = $('body');
		const header = $('.header')

		if(scrollValue > 130){
			Body.addClass('is-scroll');

		}else{
			Body.removeClass('is-scroll');
		}
	})

	const scrollDown = function(){
		const textScroll = $('.text p').text();
		const textArr = textScroll.split('')
		$.each(textArr, function (i, char) {
			$('.text p').hide()
			$('.text').append(`<span style="transform: rotate(${i * 13}deg)">${char}</span>`);
		});
	}

	const scrollAboutUs = function(){
		const textScroll = $('.scroll__text p').text();
		const textArr = textScroll.split('')
		$.each(textArr, function (i, char) {
			$('.scroll__text p').hide()
			$('.scroll__text').append(`<span style="transform: rotate(${i * 14}deg)">${char}</span>`);
		});
	}

	const repeatTextOne = function(){
		const textRepeat = $('#repeat-text-one');
		const data = textRepeat.text()
		if(data.length){
			let resultRepeat = data.repeat(6)
			textRepeat.html(resultRepeat)
		}

	}
	const repeatTextTwo = function(){
		const textRepeat = $('#repeat-text-two');
		const data = textRepeat.text()
		if(data.length){
			let resultRepeat = data.repeat(6)
			textRepeat.html(resultRepeat)
		}

	}
	const repeatTextThree = function(){
		const textRepeat = $('#repeat-text-three');
		const data = textRepeat.text()
		if(data.length){
			let resultRepeat = data.repeat(6)
			textRepeat.html(resultRepeat)
		}

	}


	const linkBlog = function(){
		const textScroll = $('.link-blog__text p').text();
		const textArr = textScroll.split('')
		$.each(textArr, function (i, char) {
			$('.link-blog__text p').hide()
			$('.link-blog__text').append(`<span style="transform: rotate(${i * 12}deg)">${char}</span>`);
		});
	}


	$(function () {
		scrollDown();
		scrollAboutUs();
		repeatTextOne();
		repeatTextTwo();
		repeatTextThree();
		linkBlog();

	})


})(jQuery);

