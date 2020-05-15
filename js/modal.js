let modal_id;

// Opens the modal
document.addEventListener("dblclick", function(event) {
  const clickedClass = event.target.className;
  if (clickedClass.includes("board__task-")) {
    modal_id = event.target.dataset.id;
    let req = getTaskById(modal_id);
    req.then(task => {
      document.body.innerHTML += modalTemplate(task.title, task.description);
    });
  }
});

// Closes the modal
document.addEventListener("click", function() {
  const clickedClass = event.target.className;
  if (clickedClass === "modal") {
    closeModal();
  }
  if (clickedClass === "bg-modal") {
    closeBgModal();
  }
});

const saveInfo = () => {
  const title = document.querySelector(".modal__title").value;
  const content = document.querySelector(".modal__desc").value;
  document.querySelector(
    ".modal__desc"
  ).outerHTML = `<div class="modal__desc">${content}</div>`;
  saveInfoToDatabase(modal_id, title, content);
};

const saveInfoToDatabase = async (id, title, desc) => {
  let data = await getBoardData();
  await data.forEach(item => {
    item.tasks.forEach(task => {
      if (task.id === id) {
        task.title = title;
        task.description = desc;
      }
    });
  });
  sendFormData(data);
  renderBoard();
};

const closeModal = () => {
  saveInfo();
  document.querySelector(".modal").remove();
};

const getTaskById = async id => {
  let data = await getBoardData();
  let val;
  data.forEach(category => {
    category.tasks.forEach(task => {
      if (task.id === id) {
        val = task;
      }
    });
  });

  return val;
};
