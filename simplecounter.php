<?php

include_once "mysql_connect.php";
mysql_query("UPDATE view_counter SET `views` = `views` + 1 WHERE id = '1' ");

$sql = mysql_query("SELECT * FROM view_counter WHERE id = '1' ");

while ($row =mysql_fetch_array($sql)) {
$id = $row["id"]; 
$pagename = $row["pagename"]; 
$views = $row["views"]; 

};
?>

<!DOCTYPE html>
<html>
<body>

There are <?php print $views; ?> views on the <?php print $pagename; ?> page!

</body>
</html>