jQuery(document).ready(function($){

	$('.my-profile-navigation li').on('click',function(){
		$('.my-profile-navigation li').removeClass('active');
		$(this).addClass('active');

		if ($(this).hasClass('about-nav')) {
			aio_fe_switch_tabs(0);
		}
		else if ($(this).hasClass('skill-nav')) {
			aio_fe_switch_tabs(1);
		}
		else if ($(this).hasClass('contact-nav')) {
			aio_fe_switch_tabs(2);
		}
	});
	$('.about-nav').trigger('click');
	
});

function aio_fe_switch_tabs(tab_no,$=jQuery){
	var target = $('.my-profile-working-section');
	target.css('right', (tab_no*105.25) + '%');
}