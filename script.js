 $(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		let id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});


// modal 

let modal = document.querySelector("#modal"),
	modalOverlay = document.querySelector("#modal-overlay"),
	closeButton = document.querySelector("#close-buy");
	openButton = document.querySelectorAll(".buy");

if (openButton) {
  openButton.forEach(function(el){
     el.addEventListener('click', function () {
        modal.classList.toggle("closed");
		modalOverlay.classList.toggle("closed");
     });
  });
}

closeButton.addEventListener("click", function() {
	modal.classList.toggle("closed");
	modalOverlay.classList.toggle("closed");
});



// age verification

$(document).ready(function(){
	if (Cookies.get('adult') !== 'yes') {		
		window.location.href='http://192.168.1.45:5500/preloader.html';		
	}
  $('#ageWrapper').prependTo($('body'));
  $('#ageOkay').click(function() { 
		Cookies.set('adult', 'yes');
		$('#agePopUp').fadeOut(1500, function() {
			$('#ageWrapper').css('display', 'none');			
		});		
	});
  $('#ageBad').click(function() {
    window.location.href='https://findtheinvisiblecow.com/';
  });
});


$(document).ready(function(){
  // put the popup at the start of the body
  $('#ageWrapper').prependTo($('body'));

  // check if the age has already been verified
  if (($.cookie('age')) !== 'true') { $('#ageWrapper').addClass('ageConfirmed'); }

  // if the "yes" button is clicked, add a cookie and hide the popup
  $('#ageOkay').click(function() {
    $.cookie('age', 'true', { expires: 1, path: '/' });
    $('#ageWrapper').removeClass('ageUnknown');
  });

  // if the "no" button is clicked, take the user elsewhere
  $('#ageBad').click(function() {
    window.location.href='https://findtheinvisiblecow.com/';
  });
});


// $(document).ready(function() {
	// $.cookie('ageOk', 'false');
	// if (($.cookie('ageOk')) == undefined) {
	// 	window.location.href = "http://192.168.1.45:5500/preloader.html";
		// $.cookie('ageOk', 'verification');	
	// }
// 	else {
// 		if (($.cookie('y')) == undefined) {
// 			window.location.href = "http://192.168.1.45:5500";
// 			$.cookie('y', 'true');
// 			$.cookie('ageOk', 'true');
// 	}
// }

// $('#ageOkay').click(function() {
// 			$.cookie('ageOk', 'true');
// 	    $('#ageWrapper').removeClass('ageUnknown');
// 	  });
// });














