<?php

require 'db.php';
try {
$data = $_POST['category'];
$id = $_GET['id'];

$sql = "UPDATE boards SET cate_task = :data WHERE id = :id";
$stmt = $db->prepare($sql);
$stmt->execute([':data' => $data, ':id' => $id]);
} catch(PDOException $e) {
    echo $e->getMessage();
}
?>
