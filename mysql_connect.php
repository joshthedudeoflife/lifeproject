<?php

$db_host = "localhost";
$db_username = "root";
$db_pass = "";
$db_name = "project_database";

@mysql_connect("$db_host", "$db_username", "$db_pass") or die ("could not connect to my SQL");
@mysql_selectdb("$db_name") or die ("No Database");

echo "successful connection";
?>