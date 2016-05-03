<!DOCTYPE html>
<div ng-include="'dblogin.php'"></div>
<div ng-include = "'handler.php'"></div>

<html>
	<title>
		SLD
	</title>
	
	<head>
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

		<body>
			
			<h1>
			<p class = "tahoma"> <!-- Title -->
				Student Libary Database
			</p>
			</h1>
			
			<h4>
			</h4>
			<p class = "times"> <!-- Description -->
				Get all the statistics you need about your student's reading habits
				Please select your choice below:
			</p>
			
			<p class = "times">
				This will tell you how many certain students have checked out what book you specify.
			</p>
			
			<!-- Dropdown Menu Selection -->
			<form action = "handler.php" method = "post">
				<select name = "gender">
				<option value = "Gender">Gender</option>
				<option value = "male">Male</option>
				<option value = "female">Female</option>
				<option value = "all">All</option>
				</select>
				
				<select name = "grade">
				<option value = "Grade">Grade</option>
				<option value = "5th">5th</option>
				<option value = "6th">6th</option>
				<option value = "7th">7th</option>
				<option value = "8th">8th</option>
				<option value = "9th">9th</option>
				<option value = "10th">10th</option>
				<option value = "11th">11th</option>
				<option value = "12th">12th</option>
				<option value = "all">All</option>
				</select>
				
				<select name = "book">
				<option value = "Book">Book</option>
				<option value = "1">Charlotte's Web</option>
				<option value = "2">The Hunger Games</option>
				<option value = "3">To Kill a Mockingbird</option>
				<option value = "4">Pride and Prejudice</option>
				<option value = "5">Twilight</option>
				<option value = "6">The Chronicles of Narnia</option>
				<option value = "7">Animal Farm</option>
				<option value = "8">Gone with the Wind</option>
				<option value = "9">The Book Thief</option>
				<option value = "10">The Giving Tree</option>
				<option value = "11">The Hitchhiker's Guide to the Galaxy</option>
				<option value = "12">The Fault in Our Stars</option>
				<option value = "13">Wuthering Heights</option>
				<option value = "14">The Da Vinci Code</option>
				<option value = "15">Memoirs of a Geisha</option>
				<option value = "16">Alice's Adventures in Wonderland & Through the Looking Glass</option>
				<option value = "17">Romeo and Juliet</option>
				<option value = "18">Les Miserables</option>
				<option value = "19">Divergent</option>
				<option value = "20">Lord of the Flies</option>
				</select>
					<input type = "submit" value = "Submit">	
			</form>
			
			<p class = "times">
				This will tell you the overall statistics of each book.
			</p>
			
			<form action = "handler2.php" method = "post">
				<select name = "book">
				<option value = "Book">Book</option>
				<option value = "1">Charlotte's Web</option>
				<option value = "2">The Hunger Games</option>
				<option value = "3">To Kill a Mockingbird</option>
				<option value = "4">Pride and Prejudice</option>
				<option value = "5">Twilight</option>
				<option value = "6">The Chronicles of Narnia</option>
				<option value = "7">Animal Farm</option>
				<option value = "8">Gone with the Wind</option>
				<option value = "9">The Book Thief</option>
				<option value = "10">The Giving Tree</option>
				<option value = "11">The Hitchhiker's Guide to the Galaxy</option>
				<option value = "12">The Fault in Our Stars</option>
				<option value = "13">Wuthering Heights</option>
				<option value = "14">The Da Vinci Code</option>
				<option value = "15">Memoirs of a Geisha</option>
				<option value = "16">Alice's Adventures in Wonderland & Through the Looking Glass</option>
				<option value = "17">Romeo and Juliet</option>
				<option value = "18">Les Miserables</option>
				<option value = "19">Divergent</option>
				<option value = "20">Lord of the Flies</option>
				</select>
					<input type = "submit" value = "Submit">	
			</form>
			
			
		</body>
	</head>
</html>