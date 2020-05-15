<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/main.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>Create new board</title>
</head>
<body class="board-create">
<?php require_once 'header.php'?>

<div class="board-create__container">
    <div class="board-create__wrap">
        <div class="board-create__name">Project name:</div>
        <input onkeydown="createNewBoard()" id="board-name" type="text" placeholder="My first project ..." />
        <button class="board__create-btn" onclick="createNewBoard()">Create</button>
    </div>
</div>
<?php require_once 'footer.php'?>

<script src="./js/createBoard.js"></script>
</body>
</html>