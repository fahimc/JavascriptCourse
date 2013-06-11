var test="hello world";
(function(window) {
	
	function Main() {
		if (window.addEventListener) {
			window.addEventListener("load", onLoad);
		} else {
			window.attachEvent("onload", onLoad);
		}

	}

	function onLoad() {
		// the body has loaded.
		// start coding here!
		var myDiv = document.createElement("DIV");
		myDiv.className = "box";
		myDiv.className+=" hide";
		console.log(myDiv.className);
		myDiv.className=myDiv.className.replace("hide","");
		document.body.appendChild(myDiv);

		myDiv.setAttribute("index", 123456);
		console.log(myDiv.getAttribute("index"));
		
		myDiv.style.position="absolute";
		myDiv.style.width=100+"px";
		myDiv.style.height=100+"px";
		myDiv.style.backgroundColor="#000";
		
		console.log(test);
		delete test;
		console.log(test);
		
		addListener(myDiv,"click",onClick);
		
		Singleton.text("new text");
		console.log(Singleton.text("new text"));
		
		var car1 = new Car();
		var car2 = new Car();
		console.log(car1.text("this is car 1"));
		console.log(car2.text("this is car 2"));
	}

	function addListener(obj, event, callback) {
		if (obj.attachEvent) {
			obj.attachEvent("on" + event, callback);
		} else {
			obj.addEventListener(event, callback);
		}
	}
	
	function onClick(event)
	{
		console.log(event);
	}
	Main();
}
)(window); 