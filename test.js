


function Test(){
	this.init();
}

Test.prototype = {
	init: function(){
		console.log(123);
	}
}

new Test();