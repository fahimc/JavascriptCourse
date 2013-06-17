(function(window) {

	function Main() {
		if (window.addEventListener) {
			window.addEventListener("load", onLoad);
		} else {
			window.attachEvent("onload", onLoad);
		}

	}
	function addListener(obj,eventName,callback,scope)
	{
		var root = scope;
		if (obj.addEventListener) {
			obj.addEventListener(eventName, function(event){root[callback](event)});
		} else {
			obj.attachEvent("on"+eventName, function(event){root[callback](event)});
		}
	}
	function onLoad() {
		// check shape class
		var model = new Model({
			color:"#f00",
			width:"100px",
			name:"Test"
		});
		model.set("color","#0f0");
		
		var view= new View();
		view.show();
		
		
		var controller = new Controller(model,view);
		addListener(view.button,"click","updateColor",controller);
		
	}

	Main();
}
)(window);
