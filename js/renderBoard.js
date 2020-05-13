const getBoardData = async () => {
  let id = document.querySelector('#board-id').value;
  let response = await fetch('readBoardData.php?id=' + id);
  let data = await response.json();
  return data;
};

const renderBoard = async () => {
  const CATEGORY_CONTAINER = document.querySelector('#categories');
  CATEGORY_CONTAINER.innerHTML = '';
  let data = await getBoardData();
  await data.forEach((category) => {
    let tasks = '';
    category.tasks.forEach((item) => {
      tasks += taskTemplate(item.title, item.id);
    });

    CATEGORY_CONTAINER.innerHTML += categoryTemplate(
      category.name,
      tasks,
      category.id
    );
  });
};
renderBoard();
