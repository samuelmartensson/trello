const createNewBoard = () => {
  let name = document.querySelector('#board-name').value;

  if (
    event.keyCode == 13 ||
    (event.target.className.includes('__create-btn') && name.trim() !== '')
  ) {
    fetch('createNewBoard.php?name=' + name.trim(), {})
      .then((res) => {
        let data = res.json();
        return data;
      })
      .then((data) => {
        if (data) window.location = './board.php?id=' + data;
      });
  }
};
