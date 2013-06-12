<?php
$data = stripcslashes($_POST["answers"]);
$email = stripcslashes($_POST["email"]);
if (isset($data) && isset($email)) {
	//echo $data;
	$data = explode(",", $data);
	$correctCount = 0;
	for ($a = 0; $a < count($data); $a++) {
		$answer = $data[$a];
		switch($a) {
			case 0 :
				if ($answer == "0")
					$correctCount++;
				break;
			case 1 :
				if ($answer == "true")
					$correctCount++;
				break;
		}
	}
	$percentage = (count($data) / $correctCount) * 100;

}
?>