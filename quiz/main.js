(function(window) {
	var data = {};
	var email = "fahim@gmx.com";
	var answers=[];
	function Main() {
		if (window.addEventListener) {
			window.addEventListener("load", onLoad);
		} else {
			window.attachEvent("onload", onLoad);
		}

	}

	function onLoad() {
		// check shape class
		Utensil.URLLoader.load("resource/data/quiz1.json",onJSONLoaded)
	}
	function onJSONLoaded(t,x)
	{
		data = eval("("+t+")");
		console.log(data);
	}
	function buildQuestion()
	{
		
	}
	Main();
}
)(window);
