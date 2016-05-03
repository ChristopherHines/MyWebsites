<html>
<body>
<style>
			body{
				background-color: #FFFFC2;
			}

			h1{
				color: black;
				text-align: center;
			}

			p.tahoma{
				font-family: "Tahoma", Geneva, sans-serif;
				font-size: 20px;
			}
			
			p.times{
				font-family: "Times New Roman";
			}
</style>
	<?php
	$book = $_POST['book'];
		   
				$servername = "localhost";
				$username = "root";
				$password = "";
				$dbname = "student_library_database";
				
				//create connection
				$conn = new mysqli($servername, $username, $password, $dbname);
				
				//check connection
				if($conn -> connect_error)
				{
					die("Connection failed: ".$conn->connect_error);
				}
				$sql = "SELECT * FROM library WHERE library.book_id = '$book'";
				$result = mysqli_query($conn, $sql);
				$row = mysqli_fetch_assoc($result);
				$done = $row['title'];
				echo "<strong>".$done."</strong>";
				echo "<br>";
				$done = $row['author'];
				echo $done;
				echo "<br>";
				$done = $row['genre'];
				echo $done;
				echo "<br>";
				
				
				$sql = "SELECT * FROM students JOIN records ON students.student_id = records.student_id\n" . "WHERE records.book_id = '$book'";
				$result = mysqli_query($conn, $sql);
				$row_count = mysqli_num_rows($result);
				echo "There are " . $row_count . " students total with that book checked out.";	
		?>

	<form>
		<input type = "button" value = "Go back to start" onclick = "window.location.href='http://localhost/student_library_site%20-%20Copy.php'" />
	</form>
	
</body>
</html>