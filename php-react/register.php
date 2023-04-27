<?php
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Headers: access");
	header("Access-Control-Allow-Methods: POST");
	header("Content-Type: application/json;charset=UTF-8");
	header("Access-Control-Allow-Headers:Content-Type,Access-Control-Allow-Headers,Authorization,X-Requested-With");
	
	if ($_SERVER['REQUEST_METHOD'] === 'POST') {
		$email = isset($_POST['email']) && !empty($_POST['email']) ? $_POST['email'] : '';
		$name = isset($_POST['name']) && !empty($_POST['name']) ? $_POST['name'] : '';
		$pass = isset($_POST['pass']) && !empty($_POST['pass']) ? $_POST['pass'] : '';
		
		if (!empty($email) && !empty($name) && !empty($pass)) {
			$con = mysqli_connect("localhost:3306","root","hira@1234");
			mysqli_select_db($con,"recipe-application");
			echo "1234";
			$sql = "INSERT INTO register(email,name,pass) VALUES('$email','$name','$pass');";
			$res = mysqli_query($con, $sql);
			
			if($res){
				$response['data']=array(
					'status'=>'valid'
				);
				echo json_encode($response);
				
			}
			else{
				$response['data']=array(
					'status'=>'invalid'
				);
				echo json_encode($response);
	
			}
		} else {
			$response['data']=array(
				'status'=>'invalid'
			);
			echo json_encode($response);
		}
	} else {
		$response['data']=array(
			'status'=>'invalid'
		);
		echo json_encode($response);
	}
?>

