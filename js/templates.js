const categoryTemplate = (title, tasks, id) => {
  return `<li class="board__category-item" data-id="${
    id
      ? id
      : new Date()
          .getTime()
          .toString()
          .slice(0, -1)
  }">
  <div class="board__header">
    <div class="board__title-wrap">
    <div class="board__category-name">${title}</div>
    </div>
    <div class="board__crud-wrap">
    <button class="board__lr-btn" onclick="moveCategory(event, this, 'left')"><i class="fa fa-angle-left"></i></button>
    <button class="board__del-btn" onclick="deleteCategory(event)"><i class="fa fa-minus-square"></i></button>
    <button class="board__lr-btn" onclick="moveCategory(event, this, 'right')"><i class="fa fa-angle-right"></i></button>
    </div>

    <div class="board__input-wrap board__input-wrap--in-cat">
      <input class="task-input" type="text" onkeydown='createNewTask(event)' placeholder="Add something" />
      <button class="board__add-btn" onclick="createNewTask(event)">Add</button>
    </div>
  </div>
    <ul class="board__tasks task-container">
    ${tasks ? tasks : ""}
    </ul>
    </li>`;
};
const taskTemplate = (title, id) => {
  if (title) {
    return `<li class="board__task-item" data-id="${
      id
        ? id
        : new Date()
            .getTime()
            .toString()
            .slice(0, -1)
    }">
    <div class="board__task-name">${title}</div>
    <div class="board__task-input-wrap">
    <button class="board__lr-btn" onclick="moveTask(event, this, 'left')"><i class="fa fa-angle-left"></i></button>
    <button class="board__del-btn board__del-btn--small" onclick="deleteTask(event)"><i class="fa fa-minus-square"></i></button>
    <button class="board__lr-btn" onclick="moveTask(event, this, 'right')"><i class="fa fa-angle-right"></i></button>
    </div>
    </li>`;
  } else {
    return "";
  }
};

const modalTemplate = (title, desc) => {
  return `<section class="modal">
    <div class="modal__wrap">
      <div class="modal__header">

      <div class="modal__desc-title"><i class="fa fa-chevron-right"></i><span><input class="modal__title" value="${title}" /></span></div>
        
        <button class="modal__close" onclick="closeModal()">Save and exit</button>
      </div>

      <div class="modal__desc-title"><i class="fa fa-bars"></i><span>Description</span></div>

      <textarea placeholder="Add some text..." class="modal__desc">${desc}</textarea>
    </div>
  </section>`;
};
const bgModalTemplate = () => {
  return `<section class="bg-modal">
    <div class="modal__wrap">
        <div class="modal__title">Background changer</div>
        <div class="modal__bg-inputs">
          <input name="background" class="modal__bg-input" placeholder="Enter image url"/>
          <button class="modal__bg-close" onclick="closeBgModal()">close</button>
        </div>
    </div>
  </section>`;
};
