//$(window).scroll(function(){

	var wSrcoll = $(this).scrollTop();

	$('.logo').css({
		'transform' : 'translate(0px, '+ wSrcoll /10 + '%)'
	})


	$('.header-body').css({
		'transform' : 'translate(0px, '+ wSrcoll /50 + '%)'
	})
});