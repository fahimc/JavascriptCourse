(function(window) {
	var data = {};
	var email = "fahim@gmx.com";
	var firstName = "";
	var lastName = "";
	var currentIndex = 0;
	var answers =[];
	var score =0;
	var time={};
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
		Utensil.addListener(document.getElementById("previousButton"), "click", onPreviousClick);
		Utensil.addListener(document.getElementById("formButton"), "click", onStartClick);
		Countdown.callback=onCountdown;
		showForm();
	}
	function showForm()
	{
		document.getElementById("regForm").style.visibility="visible";
	}
	function hideQuiz()
	{
		document.getElementById("quizHolder").style.display="none";
	}
	function showQuiz()
	{
		document.getElementById("quizHolder").style.display="block";
	}
	function hideForm()
	{
		document.getElementById("regForm").style.display="none";
	}
	function startQuiz()
	{
		Countdown.minutes=data.time.minutes;
		Countdown.seconds=data.time.seconds;
		Countdown.start();
	}
	function setPage()
	{
		document.getElementById("quizTime").innerHTML = data.time.minutes+" minutes and "+data.time.seconds+" seconds";
		document.getElementById("quizTitle").innerHTML = data.title;
	}
	function onStartClick(event)
	{
		document.getElementById("formError").style.visibility="hidden";
		var fName = document.getElementById("firstName"); 
		var lName = document.getElementById("lastName"); 
		var emailAdd = document.getElementById("emailAdd"); 
		var error=false;
		if(fName.value==""||fName.value==" "||lName.value==""||lName.value==" "||emailAdd.value==""||emailAdd.value==" ")error=true;
		if(emailAdd.value.indexOf("@")<0||emailAdd.value.indexOf(".")<0)error =true;
		
		if(error)
		{
			document.getElementById("formError").style.visibility="visible";
		}else{
			email = emailAdd.value;
			firstName = fName.value;
			lastName = lName.value;
			hideForm();
			showQuiz();
			startQuiz();
		}
		
	}
	function onNextClick(event) {
			checkAnswer();
		showPreviousButton();
		
		if (currentIndex >= data.questions.length-1) {
			Countdown.stop();
			end();
			
		} else {
			currentIndex++;
			buildQuestion();
			if (currentIndex >= data.questions.length-1)
			document.getElementById("nextButton").innerHTML="submit";
		}
	}
	function onPreviousClick(event)
	{
		if (currentIndex >= data.questions.length-1)
			document.getElementById("nextButton").innerHTML="next";
		currentIndex--;
		if(currentIndex<=0)
		{
			currentIndex=0;
			hidePreviousButton();
		}
		buildQuestion();
		
		
	}
	function showPreviousButton()
	{
		document.getElementById("previousButton").style.display="block";
	}
	function hidePreviousButton()
	{
		document.getElementById("previousButton").style.display="none";
	}
	function showEndPage()
	{
		document.getElementById("completeHolder").style.display="block";
	}
	function end()
	{
		hideQuiz();
		showEndPage();
		post_to_url(data.submitURL, {
				"answers" : answers.toString(),
				"email":email,
				"firstname":firstName,
				"lastname":lastName,
				"minutes":time.minutes,
				"seconds":time.seconds

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
		
			answers[currentIndex]=str.value.replace(/(\r\n|\n|\r)/gm,"");
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
			radio.className="radio";
			var p = document.createElement("P");
			var number = document.createElement("P");
			number.className="number";
			var clear = document.createElement("div");
			clear.className="clearBoth";
			radio.type = "radio";
			if (a == 0)
				radio.checked = "checked";
			radio.name = "answer";
			p.innerHTML = answer;
			number.innerHTML = (a+1)+". ";
			radio.value = a;
			li.appendChild(number);
			li.appendChild(radio);
			li.appendChild(p);
			li.appendChild(clear);
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
		console.log(params);
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
		
		if(obj.end==true)end();
		time.minutes = obj.minutes;
		time.seconds = obj.seconds;
		document.getElementById("countdown").innerHTML=obj.minutes+":"+obj.seconds;
	}
	
	window.onFocus=function()
	{
		document.getElementById("formError").style.visibility="hidden";
	}
	window.submitComplete=function(val)
	{
		console.log(val);
		if(val==-1)
		{
			
		}else{
			score=val;
			 showComplete();
		}
	}
	function showComplete()
	{
		document.getElementById("waiting").style.display="none";
		document.getElementById("perNumber").innerHTML = Math.ceil(score);
		document.getElementById("showResult").style.display="block";
	}
	Main();
}
)(window);
