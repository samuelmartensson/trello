let id = document.querySelector("#board-id").value;

const sendFormData = data => {
  let formData = new FormData();
  formData.append("category", JSON.stringify(data));

  fetch("insertData.php?id=" + id, {
    method: "POST",
    body: formData
  });
};

const updateBoardName = () => {
  let newName = document.querySelector(".board__title-input").value;
  fetch(`updateBoardName.php?id=${id}&name=${newName.trim()}`);
};

document
  .querySelector(".board__title-input")
  .addEventListener("blur", updateBoardName);

////////////////////////////////////////////////////////
/////////////// CATEGORY CATEGORY CATEGORY /////////////
////////////////////////////////////////////////////////

const createNewCategory = event => {
  const categories = document.querySelector("#categories");
  let input = document.querySelector("#input-value");

  if (event.keyCode == 13 || event.target.className.includes("__cat-add")) {
    if (input.value.trim() !== "") {
      categories.innerHTML += categoryTemplate(input.value);
      addCategoryToDatabase(input.value);
    }

    input.value = "";
  }
};
const addCategoryToDatabase = async name => {
  const temp = {
    name: name,
    id: new Date()
      .getTime()
      .toString()
      .slice(0, -1),
    tasks: []
  };

  let data = await getBoardData();
  await data.push(temp);
  sendFormData(data);
};

const deleteCategory = event => {
  let category = event.target.parentElement.parentElement.parentElement;
  deleteCategoryFromDatabase(parseInt(category.dataset.id));
  category.remove();
};

const deleteCategoryFromDatabase = async id => {
  let data = await getBoardData();
  data = data.filter(item => item.id !== id.toString());
  sendFormData(data);
};

const moveCategory = (event, elem, dir) => {
  let direction = 0;
  let elementToMove = elem.parentElement.parentElement.parentElement;
  let parent = elementToMove.parentElement;
  let listPosition = Array.prototype.indexOf.call(
    elementToMove.parentElement.childNodes,
    elementToMove
  );
  if (dir === "left" && listPosition !== 0) {
    direction = -1;
  }
  if (dir === "right") {
    direction = 2;
  }
  parent.insertBefore(elementToMove, parent.children[listPosition + direction]);
  swapCategoryDatabasePositions(listPosition, dir, parent.children.length);
};

const swapCategoryDatabasePositions = async (listPosition, dir, maxlength) => {
  let data = await getBoardData();
  let direction = 0;
  if (dir === "left" && listPosition !== 0) {
    direction = -1;
  }
  if (dir === "right" && listPosition !== maxlength - 1) {
    direction = 1;
  }
  [data[listPosition], data[listPosition + direction]] = [
    data[listPosition + direction],
    data[listPosition]
  ];
  sendFormData(data);
};

////////////////////////////////////////////////////////
/////////////// *** CATEGORY END CATEGORY *** //////////
////////////////////////////////////////////////////////

////////////////////////////////////////////////////////
//////////////////// TASK TASK TASK ////////////////////
////////////////////////////////////////////////////////

const createNewTask = event => {
  const elem = event.target.parentElement.parentElement.parentElement;
  const tasks = elem.querySelector(".task-container");
  const category_id = elem.dataset.id;

  let input = event.target.parentElement.parentElement.querySelector(
    ".task-input"
  );
  if (event.keyCode == 13 || event.target.className.includes("__add-btn")) {
    const temp = {
      id: new Date()
        .getTime()
        .toString()
        .slice(0, -1),
      title: input.value,
      description: ""
    };

    if (input.value.trim() !== "") {
      tasks.innerHTML += taskTemplate(input.value);
      addTaskToDatabase(temp, parseInt(category_id));
    }

    input.value = "";
  }
};
const addTaskToDatabase = async (obj, id) => {
  let data = await getBoardData();
  data.forEach(item => {
    if (item.id === id.toString()) {
      item.tasks.push(obj);
    }
  });
  sendFormData(data);
};

const deleteTask = event => {
  let task = event.target.parentElement.parentElement;
  deleteTaskFromDatabase(parseInt(task.dataset.id));
  task.remove();
};

const deleteTaskFromDatabase = async id => {
  let data = await getBoardData();
  await data.forEach(item => {
    item.tasks = item.tasks.filter(task => task.id !== id.toString());
  });
  sendFormData(data);
};

// Removes task from data obj and moves it on client DOM
const moveTask = async (event, elem, dir) => {
  let parentSibling;

  // Get the data obj that includes categories and tasks
  let data = await getBoardData();
  // Set the clicked element button to the outer task container
  let elementToMove = elem.parentElement.parentElement;
  // Set the container that includes ALL categories
  let categoryContainer =
    elementToMove.parentElement.parentElement.parentElement.childNodes;
  // Get the index of the clicked category
  let i = Array.prototype.indexOf.call(
    categoryContainer,
    elementToMove.parentElement.parentElement
  );
  // Initialize an empty array that an object will be placed in
  let itemToMove = [];
  // Select the correct task array from data object
  let clickedTaskCategory = data[i]["tasks"];
  // Match the clicked task id with the correct id in data object and set the itemToMove
  clickedTaskCategory.forEach(task => {
    if (task.id === elementToMove.dataset.id) {
      itemToMove = task;
    }
  });
  // Remove the task from the data object
  clickedTaskCategory = clickedTaskCategory.filter(
    task => task.id !== elementToMove.dataset.id
  );
  // Set the data object to the manipulated data
  data[i]["tasks"] = clickedTaskCategory;

  // Moves task in DOM
  if (dir === "left" && i !== 0) {
    parentSibling = elementToMove.parentElement.parentElement.previousSibling;
    parentSibling.querySelector(".task-container").prepend(elementToMove);
    swapTaskDatabasePositions(parentSibling.dataset.id, data, itemToMove);
  }
  if (dir === "right" && i !== categoryContainer.length - 1) {
    parentSibling = elementToMove.parentElement.parentElement.nextSibling;
    parentSibling.querySelector(".task-container").prepend(elementToMove);
    swapTaskDatabasePositions(parentSibling.dataset.id, data, itemToMove);
  }
};

// Adds the itemToMove to the new category in database
const swapTaskDatabasePositions = (cat_id, data, itemToMove) => {
  if (itemToMove.length !== 0) {
    data.forEach(item => {
      if (item.id === cat_id) {
        item.tasks.unshift(itemToMove);
      }
    });
    sendFormData(data);
  } else {
    alert("Something went wrong");
    location.reload();
  }
};

////////////////////////////////////////////////////////
/////////////// *** TASK END TASK *** //////////////////
////////////////////////////////////////////////////////
