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
		var video = document.createElement('video');
		document.body.appendChild(video);
		var source = document.createElement('source');

		source.src = 'resource/video.mp4';
		source.type = "video/mp4";

		video.appendChild(source);
		video.play();
	}

	Main();
}
)(window);
