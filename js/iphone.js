var sizeWidth = function () {
	var newWidth = $('.animation').height() * (405 / 682);
	$('.animation').width(newWidth);
};

$(function() {
	sizeWidth();
});

$( window ).resize(function() {
	sizeWidth();
});