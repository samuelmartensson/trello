<?php 
require 'db.php';

$id = $_GET['id'];

$sql = "DELETE FROM boards WHERE id = :id";
$stmt = $db->prepare($sql);
$stmt->execute([':id' => $id]);
header('Location: boardView.php');
?>