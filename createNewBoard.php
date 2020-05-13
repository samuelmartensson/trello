<?php 

require 'db.php';

$name = $_GET['name'];

$sql = "INSERT INTO boards (name) VALUES (:name)";
$stmt = $db->prepare($sql);
$stmt->execute([':name' => $name]);
$id = $db->lastInsertId();

echo $id;
?>