(function(window) {
	
	function Main() {
		if (window.addEventListener) {
			window.addEventListener("load", onLoad);
		} else {
			window.attachEvent("onload", onLoad);
		}

	}

	function onLoad() {
		// check shape class
		var myShape = new Shape();
		myShape.init();
		myShape.build();
		myShape.style();
		
		var rectangle = new Rectangle();
		rectangle.init();
		rectangle.build();
		rectangle.style();
		
		var circle = new Circle();
		circle.init();
		circle.build();
		circle.style();
	}

	Main();
}
)(window); 