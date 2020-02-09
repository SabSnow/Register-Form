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


// создадим пустой объект
var $data = {};
// переберём все элементы input, textarea и select формы с id="myForm "
$('FormLog').find ('input, textearea, select').each(function() {
  // добавим новое свойство к объекту $data
  // имя свойства – значение атрибута name элемента
  // значение свойства – значение свойство value элемента
  $data[this.name] = $(this).val();
});
function sendLogForm(){
		$.ajax({
			type	: "POST",
			cache	: false,
			url		: desktop.js,
			data	: $data.serializeArray(),
			success	: function(data) {
				yaCounter{{yaCounterID}}.reachGoal('zayavka', function () {
					if (data.length > 0) {
					var ret = data.split('|',3);
						if(ret[0] > 0) {
						$().message(ret[1]);
						} else {
							$().message(ret[1]);
							setTimeout(function() {
							window.location.replace(ret[2]);
						})
					}
				}
			})
			}
		});
	};