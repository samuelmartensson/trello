const changeBg = () => {
  document.body.innerHTML += bgModalTemplate();
};

const closeBgModal = () => {
  const input = document.querySelector(".modal__bg-input");
  const link = input.value;
  const bgElem = document.querySelector(".board");
  if (input.value.trim() !== "") {
    bgElem.style = `background: linear-gradient(120deg, #fccb9077 0%, #d57eeb91 100%), url(${link})`;
    let formData = new FormData();
    formData.append("bgImg", link);

    fetch("backgroundChange.php?id=" + id, {
      method: "POST",
      body: formData
    });
  }
  document.querySelector(".bg-modal").remove();
};

const setBackground = () => {
  fetch("getBackground.php?id=" + id)
    .then(res => res.json())
    .then(link => {
      const bgElem = document.querySelector(".board");
      bgElem.style = `background: linear-gradient(120deg, #fccb9077 0%, #d57eeb91 100%), url(${link})`;
    });
};
setBackground();
