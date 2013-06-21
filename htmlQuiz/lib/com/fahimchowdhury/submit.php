<?php
$data = stripcslashes($_POST["answers"]);
$email = stripcslashes($_POST["email"]);
$firstName = stripcslashes($_POST["firstname"]);
$lastName = stripcslashes($_POST["lastname"]);
$email = stripcslashes($_POST["email"]);
$minutes = stripcslashes($_POST["minutes"]);
$seconds = stripcslashes($_POST["seconds"]);
if (isset($data) && isset($email)) {
	// include_once 'config.php';
	$content = file_get_contents('../../../resource/data/quiz1_answers.json');
	$answersJson = json_decode($content);
	$answersJson = $answersJson->answers;
	//echo $data;
	$data = explode(",", $data);
	$correctCount = 0;
	for ($a = 0; $a < count($data); $a++) {
		$answer = $data[$a];
		$currentAnswer=$answersJson[$a];
		switch($currentAnswer->type) {
			case "radio" :
				if ($answer == $currentAnswer->answer)
					$correctCount++;
				break;
			case "code" :
				if (checkCode($currentAnswer->answer, $answer)) {
					$correctCount++;
				}
				break;
		}
	}
	$percentage = ($correctCount / count($data)) * 100;
	$date = date('Y-m-d H:i:s', '1299762201428');
	// $con = mysqli_connect(HOST, USER, PASS, DATABASE);
	// // Check connection
	// if (mysqli_connect_errno($con)) {
		// echo "<script>window.parent.submitComplete(-1)</script>";
	// } else {
		// mysqli_query($con, "INSERT INTO results (first_name, last_name, email,minutes,seconds,percentage,date)
// VALUES ('$firstName', '$lastName','$email','$minutes','$seconds','$percentage','$date')");

$to      = $email;
$subject = 'HTML Quiz';
$message = "Hi ".$firstName." ".$lastName.",\r\nHere is your quiz result. \r\n".$percentage."%";
$headers = 'From: fahim.chowdhury1985@gmail.com' . "\r\n" .
    'Reply-To: fahim.chowdhury1985@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
		echo "<script>window.parent.submitComplete($percentage)</script>";
	// }
// 
	// mysqli_close($con);
} else {
	echo "<script>window.parent.submitComplete(-1)</script>";
}
function checkCode($correct, $answer) {
	$arr = explode(",", $correct);
	$found = 0;
	for ($a = 0; $a < count($arr); $a++) {
		if (strpos($answer, $arr[$a]) !== false) {
			$found++;
		}
	}
	if ($found == count($arr)) {
		return true;
	} else {
		return false;
	}
}
?>