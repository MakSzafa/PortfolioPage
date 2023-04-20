let theme = localStorage.getItem("theme");

[...document.querySelectorAll(".button")].forEach((button) => {
  button.addEventListener("click", function () {
    document.querySelector(".active-btn").classList.remove("active-btn");
    button.classList.add("active-btn");
    document.querySelector(".active").classList.remove("active");
    document.getElementById(button.dataset.id).classList.add("active");
    window.scrollTo(0, 0);
  });
});

document.querySelector(".theme-button").addEventListener("click", () => {
  if (theme === "dark") {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    theme = "light";
  } else {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
    theme = "dark";
  }

  localStorage.setItem("theme", theme);
});

if (theme === "dark") {
  document.body.classList.add("dark-mode");
}

if (theme === "light") {
  document.body.classList.add("light-mode");
}