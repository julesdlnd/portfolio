document.addEventListener("DOMContentLoaded", function () {
  let modal = document.getElementById("imageModal");
  let modalImg = document.getElementById("modalImg");
  let close = document.querySelector(".close");

  document.querySelectorAll(".photo-container a").forEach(item => {
    item.addEventListener("click", function (event) {
      event.preventDefault();
      modal.style.display = "flex";
      modalImg.src = this.href;
    });
  });

  close.addEventListener("click", function () {
    modal.style.display = "none";
  });

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});



