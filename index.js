$(function() {
	$('.typing').each(function(i, ele) {
		ele = $(ele);
		var length = ele.text().length;
		ele.parent().css('width', length + 'em');
		ele.css('-webkit-animation-timing-function', 'steps(' + length + ', end)');
	});
})