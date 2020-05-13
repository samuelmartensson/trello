<?php

require 'db.php';
try {
$data = $_GET['name'];
$id = $_GET['id'];

$sql = "UPDATE boards SET name = :data WHERE id = :id";
$stmt = $db->prepare($sql);
$stmt->execute([':data' => $data, ':id' => $id]);

} catch(PDOException $e) {
    echo $e->getMessage();
}
?>
