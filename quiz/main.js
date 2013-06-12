(function(window) {
	var data = {};
	var email = "fahim@gmx.com";
	var currentIndex = 0;
	var answers =[];
	function Main() {
		if (window.addEventListener) {
			window.addEventListener("load", onLoad);
		} else {
			window.attachEvent("onload", onLoad);
		}

	}

	function onLoad() {
		// check shape class
		Utensil.URLLoader.load("resource/data/quiz1.json?rand="+Math.random(), onJSONLoaded);

	}

	function onJSONLoaded(t, x) {
		data = eval("(" + t + ")");
		
		buildQuestion();
		setPage();
		Utensil.addListener(document.getElementById("nextButton"), "click", onNextClick);
		Countdown.callback=onCountdown;
		Countdown.minutes=data.time.minutes;
		Countdown.seconds=data.time.seconds;
		Countdown.start();
	}
	function setPage()
	{
		document.getElementById("quizTitle").innerHTML = data.title;
	}
	function onNextClick(event) {
		checkAnswer();
		if (currentIndex >= data.questions.length-1) {
			
			end();

		} else {
			currentIndex++;
			buildQuestion();
			if (currentIndex >= data.questions.length-1)
			document.getElementById("nextButton").innerHTML="submit";
		}
	}
	function end()
	{
		post_to_url(data.submitURL, {
				"answers" : answers.toString(),
				"email":email

			}, "POST");
	}
	function checkAnswer() {
		switch(data.questions[currentIndex].type) {
			case "radio":
				checkRadio();
				break;
			case "code":
				checkCode();

		}
	}

	function checkRadio() {
		var radios = document.getElementsByName('answer');

		for (var i = 0, length = radios.length; i < length; i++) {
			if (radios[i].checked) {
				answers[currentIndex]=radios[i].value;
				return;
			}
		}
		answers[currentIndex]=false;
	}

	function checkCode() {
		var answer = data.questions[currentIndex].answers[0];
		var str = document.getElementById("answerText");
		var arr = answer.split(",");
		var found = 0;
		for (var a = 0; a < arr.length; a++) {
			if (str.value.indexOf(arr[a]) >= 0) {
				found++;
			}
		}
		if(found==arr.length)
		{
			answers[currentIndex]=true;
		}else{
			answers[currentIndex]=false;
		}
	}

	function buildQuestion() {
		document.getElementById("questionCopy").innerHTML = "";
		document.getElementById("answers").innerHTML = "";
		if (data.questions[currentIndex]) {
			document.getElementById("questionCopy").innerHTML = data.questions[currentIndex].question;
			switch(data.questions[currentIndex].type) {
				case "radio":
					buildRadio();
					break;
				case "code":
					buildText();

			}
		}
	}

	function buildRadio() {
		for (var a = 0; a < data.questions[currentIndex].answers.length; a++) {
			var answer = data.questions[currentIndex].answers[a];
			var li = document.createElement("LI");
			var radio = document.createElement("INPUT");
			var p = document.createElement("P");
			radio.type = "radio";
			if (a == 0)
				radio.checked = "checked";
			radio.name = "answer";
			p.innerHTML = answer;
			radio.value = a;
			li.appendChild(radio);
			li.appendChild(p);
			document.getElementById("answers").appendChild(li);
		}
	}

	function buildText() {
		var li = document.createElement("LI");
		var text = document.createElement("TEXTAREA");
		text.id = "answerText";
		li.appendChild(text);
		document.getElementById("answers").appendChild(li);
	}

	function post_to_url(path, params, method) {
		method = method || "post";
		// Set method to post by default if not specified.

		// The rest of this code assumes you are not using a library.
		// It can be made less wordy if you use one.
		var form = document.createElement("form");
		form.setAttribute("method", method);
		form.setAttribute("action", path);
		form.setAttribute("target", "phpPost");

		for (var key in params) {
			if (params.hasOwnProperty(key)) {
				var hiddenField = document.createElement("input");
				hiddenField.setAttribute("type", "hidden");
				hiddenField.setAttribute("name", key);
				hiddenField.setAttribute("value", params[key]);

				form.appendChild(hiddenField);
			}
		}

		document.body.appendChild(form);
		form.submit();
	}
	function onCountdown(obj)
	{
		console.log(obj);
		if(obj.end==true)end();
		document.getElementById("countdown").innerHTML=obj.minutes+":"+obj.seconds;
	}
	Main();
}
)(window);
