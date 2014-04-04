<?php
$con = mysql_connect("localhost", "root", "", "project_database");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

mysql_select_db("project_database", $con);

$sql="INSERT INTO contacts (firstname, lastname, email, phone)
VALUES
('$_POST[firstname]','$_POST[lastname]','$_POST[email]','$_POST[phone]')";

if (!mysql_query($sql,$con))
  {
  die('Error: ' . mysql_error());
  }
echo "1 record added";

mysql_close($con);
?>