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
		var jsonString = '{"text":"hello world"}';
		
		var json =null;
		if(window.JSON && window.JSON.parse) 
		{
			json = JSON.parse(jsonString);
		}else{
			json = eval('(' + jsonString + ')');
		}
		console.log(json);
	}

	Main();
}
)(window); 