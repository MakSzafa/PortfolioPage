(function () {
  [...document.querySelectorAll(".button")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      button.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
      window.scrollTo(0,0);
    });
  });
    document.querySelector(".theme-button").addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
    });
})();
