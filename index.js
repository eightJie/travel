$(function() {

	function PreImgs(imgs){
		this.imgs = imgs;
		this.index = 0;
	}
	PreImgs.prototype = {

		_load: function(){
			var self = this;
			var urls = self.imgs;

			urls.forEach(function(url){
				var img = new Image();

				img.onload = function(){
					self.index++;
					if(self.index == imgs.length){
						self.loadedBack && self.loadedBack();
					}
				};
				img.src = url;

			});
		},

		loaded: function(back){
			this.loadedBack = back;
		}

	};


	



	// $('.typing').each(function(i, ele) {
	// 	ele = $(ele);
	// 	var length = ele.text().length;
	// 	ele.parent().css('width', length + 'em');
	// 	ele.css('-webkit-animation-timing-function', 'steps(' + length + ', end)');
	// });
})