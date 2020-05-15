<?php 

require 'db.php';

$id = $_GET['id'];

$sql = "SELECT * FROM boards WHERE id = :id";
$stmt = $db->prepare($sql);

$stmt->execute([':id' => $id]);

while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    $bg = $row['background'];
}

$json = json_encode($bg, JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
echo $json;

?>