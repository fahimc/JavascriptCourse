(function(window) {
	var data = {};
	var email = "fahim@gmx.com";
	var currentIndex = 0;
	var answers = [];
	function Main() {
		if (window.addEventListener) {
			window.addEventListener("load", onLoad);
		} else {
			window.attachEvent("onload", onLoad);
		}

	}

	function onLoad() {
		// check shape class
		Utensil.URLLoader.load("resource/data/quiz1.json", onJSONLoaded);

	}

	function onJSONLoaded(t, x) {
		data = eval("(" + t + ")");
		console.log(data);
		buildQuestion();

		Utensil.addListener(document.getElementById("nextButton"), "click", onNextClick);
	}

	function onNextClick(event) {
		checkAnswer();
		currentIndex++;
		buildQuestion();
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
				console.log(radios[i].value);
			}
		}
	}

	function checkCode() {
		var answer =data.questions[currentIndex].answers[0];
		var str =document.getElementById("answerText");
		var arr = answer.split(",");
		var found = 0;
		for(var a=0;a<arr.length;a++)
		{
			if(str.value.indexOf(arr[a])>=0)
			{
				found++;
			}
		}
		console.log(found,arr.length);
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
		text.id="answerText";
		li.appendChild(text);
		document.getElementById("answers").appendChild(li);
	}

	Main();
}
)(window);
