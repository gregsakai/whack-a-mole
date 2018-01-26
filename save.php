<?php

  include_once('db.php');

  $name = $_POST['name'];

  mysql_query("INSERT INTO players VALUES('', '$name', '')");

 ?>
