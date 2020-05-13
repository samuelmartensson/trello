<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/main.css">
    <title>Create new board</title>
</head>
<body class="board-create">
<?php require_once 'header.php'?>

<div class="board-create__wrap">
    <div class="board-create__name">Project name:</div>
    <input id="board-name" type="text" placeholder="My first project ..." />
    <button onclick="createNewBoard()">Create</button>
</div>
<?php require_once 'footer.php'?>

<script src="./js/createBoard.js"></script>
</body>
</html>