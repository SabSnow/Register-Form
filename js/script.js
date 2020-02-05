$(document).on('click','a#forgot',function(e){
	e.preventDefault();
		$('form#form-forgot').css('bottom','5px');
		$(this).fadeOut('fast',function(){
			$('a#back').fadeIn('fast');
		});
	 
	});
	$('div#field-forgot').on('click','a#back',function(e){
		e.preventDefault();
		$('form#form-forgot').css('bottom','-195px');
		$(this).fadeOut('fast',function(){
			$('a#form-forgot').fadeIn('fast');
	});
});