var main = function () {
	for (var i=0;i<5;i++) {
		$('.container').append('<ul></ul>');
	}
	for (var j=0;j<5;j++) {
		$('ul').append('<li></li>');
	}
	$('li').hover(function() {
		$(this).css('background-color','#4F97E5')
	});	
	
};

var newGrid=function () {
	$('.container').remove();
	$('h1').append('<div class="container"></div>');
	
	var hoehe=prompt("Geben Sie eine neue Hoehe ein:");	
	if(hoehe>25){
		var hoehe=prompt("Die Hoehe darf nicht mehr als 25 betragen. Bitte geben Sie eine neue ein:");	
	}
	var breite=prompt("Geben Sie eine Breite ein:");
	if(breite>25){
		var hoehe=prompt("Die Hoehe Breite nicht mehr als 25 betragen. Bitte geben Sie eine neue ein:");	
	}
	
	for (var i=0;i<hoehe;i++) {
		$('.container').append('<ul></ul>');
	}
	for (var j=0;j<breite;j++) {
		$('ul').append('<li></li>');
	}
	
	$('li').hover(function() {
	$(this).css('background-color','#4F97E5')
});
}

var reset=function () {
	$('li').css('background-color','#FFFFFF');	
}

$(document).ready(main);