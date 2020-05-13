const createNewBoard = () => {
  let name = document.querySelector('#board-name').value;
  fetch('createNewBoard.php?name=' + name, {})
    .then((res) => {
      let data = res.json();
      return data;
    })
    .then((data) => {
      if (data) window.location = './board.php?id=' + data;
    });
};
